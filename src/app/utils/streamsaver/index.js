/* eslint-disable no-restricted-globals */
/* eslint-disable no-new */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

function makeIframe(src) {
  if (!src) throw new Error('meh');
  const iframe = document.createElement('iframe');
  iframe.hidden = true;
  iframe.src = src;
  iframe.loaded = false;
  iframe.name = 'iframe';
  iframe.isIframe = true;
  iframe.postMessage = (...args) => iframe.contentWindow.postMessage(...args);
  iframe.addEventListener(
    'load',
    () => {
      iframe.loaded = true;
    },
    { once: true }
  );
  document.body.appendChild(iframe);
  return iframe;
}

function makePopup(src) {
  const options = 'width=200,height=100';
  const delegate = document.createDocumentFragment();
  const popup = {
    frame: window.open(src, 'popup', options),
    loaded: false,
    isIframe: false,
    isPopup: true,
    remove() {
      popup.frame.close();
    },
    addEventListener(...args) {
      delegate.addEventListener(...args);
    },
    dispatchEvent(...args) {
      delegate.dispatchEvent(...args);
    },
    removeEventListener(...args) {
      delegate.removeEventListener(...args);
    },
    postMessage(...args) {
      popup.frame.postMessage(...args);
    },
  };

  const onReady = (evt) => {
    if (evt.source === popup.frame) {
      popup.loaded = true;
      window.removeEventListener('message', onReady);
      popup.dispatchEvent(new Event('load'));
    }
  };

  window.addEventListener('message', onReady);

  return popup;
}

function loadTransporter(mitmTransporter, mitm) {
  if (!mitmTransporter) {
    return isSecureContext ? makeIframe(mitm) : makePopup(mitm);
  }
  return mitmTransporter;
}

export function createWriteStream(filename, options, size) {
  let opts = {
    size: null,
    pathname: null,
    writableStrategy: undefined,
    readableStrategy: undefined,
  };

  const test = (fn) => {
    try {
      fn();
    } catch (e) {}
  };

  const mitm =
    window.location.hostname === 'localhost'
      ? 'https://datastore.iati.cloud/streamsaver/mitm.html'
      : `https://${window.location.hostname}/streamsaver/mitm.html`;

  let supportsTransferable = false;
  let mitmTransporter = null;
  const ponyfill = window.WebStreamsPolyfill || {};
  const isSecureContext = window.isSecureContext;
  let useBlobFallback =
    /constructor/i.test(window.HTMLElement) ||
    !!window.safari ||
    !!window.WebKitPoint;
  const downloadStrategy =
    isSecureContext || 'MozAppearance' in document.documentElement.style
      ? 'iframe'
      : 'navigate';

  try {
    // We can't look for service worker since it may still work on http
    new Response(new ReadableStream());
    if (isSecureContext && !('serviceWorker' in navigator)) {
      useBlobFallback = true;
    }
  } catch (err) {
    useBlobFallback = true;
  }

  test(() => {
    // Transfariable stream was first enabled in chrome v73 behind a flag
    const { readable } = new TransformStream();
    const mc = new MessageChannel();
    mc.port1.postMessage(readable, [readable]);
    mc.port1.close();
    mc.port2.close();
    supportsTransferable = true;
    // Freeze TransformStream object (can only work with native)
    Object.defineProperty(streamSaver, 'TransformStream', {
      configurable: false,
      writable: false,
      value: TransformStream,
    });
  });

  let bytesWritten = 0; // by StreamSaver.js (not the service worker)
  let downloadUrl = null;
  let channel = null;
  let ts = null;

  // normalize arguments
  if (Number.isFinite(options)) {
    [size, options] = [options, size];
    console.warn(
      '[StreamSaver] Depricated pass an object as 2nd argument when creating a write stream'
    );
    opts.size = size;
    opts.writableStrategy = options;
  } else if (options && options.highWaterMark) {
    console.warn(
      '[StreamSaver] Depricated pass an object as 2nd argument when creating a write stream'
    );
    opts.size = size;
    opts.writableStrategy = options;
  } else {
    opts = options || {};
  }
  if (!useBlobFallback) {
    mitmTransporter = loadTransporter(mitmTransporter, mitm);

    channel = new MessageChannel();

    // Make filename RFC5987 compatible
    filename = encodeURIComponent(filename.replace(/\//g, ':'))
      .replace(/['()]/g, escape)
      .replace(/\*/g, '%2A');

    const response = {
      transferringReadable: supportsTransferable,
      pathname:
        opts.pathname || Math.random().toString().slice(-6) + '/' + filename,
      headers: {
        'Content-Type': 'application/octet-stream; charset=utf-8',
        'Content-Disposition': "attachment; filename*=UTF-8''" + filename,
      },
    };

    if (opts.size) {
      response.headers['Content-Length'] = opts.size;
    }

    const args = [response, '*', [channel.port2]];

    if (supportsTransferable) {
      const transformer =
        downloadStrategy === 'iframe'
          ? undefined
          : {
              // This transformer & flush method is only used by insecure context.
              transform(chunk, controller) {
                bytesWritten += chunk.length;
                controller.enqueue(chunk);

                if (downloadUrl) {
                  location.href = downloadUrl;
                  downloadUrl = null;
                }
              },
              flush() {
                if (downloadUrl) {
                  location.href = downloadUrl;
                }
              },
            };
      ts = new TransformStream(
        transformer,
        opts.writableStrategy,
        opts.readableStrategy
      );
      const readableStream = ts.readable;

      channel.port1.postMessage({ readableStream }, [readableStream]);
    }

    channel.port1.onmessage = (evt) => {
      // Service worker sent us a link that we should open.
      if (evt.data.download) {
        // Special treatment for popup...
        if (downloadStrategy === 'navigate') {
          mitmTransporter.remove();
          mitmTransporter = null;
          if (bytesWritten) {
            location.href = evt.data.download;
          } else {
            downloadUrl = evt.data.download;
          }
        } else {
          if (mitmTransporter.isPopup) {
            mitmTransporter.remove();
            // Special case for firefox, they can keep sw alive with fetch
            if (downloadStrategy === 'iframe') {
              makeIframe(streamSaver.mitm);
            }
          }

          // We never remove this iframes b/c it can interrupt saving
          makeIframe(evt.data.download);
        }
      }
    };

    if (mitmTransporter.loaded) {
      mitmTransporter.postMessage(...args);
    } else {
      mitmTransporter.addEventListener(
        'load',
        () => {
          mitmTransporter.postMessage(...args);
        },
        { once: true }
      );
    }
  }

  let chunks = [];

  return (
    (!useBlobFallback && ts && ts.writable) ||
    new (window.WritableStream || ponyfill.WritableStream)(
      {
        write(chunk) {
          if (useBlobFallback) {
            // Safari... The new IE6
            // https://github.com/jimmywarting/StreamSaver.js/issues/69
            //
            // even doe it has everything it fails to download anything
            // that comes from the service worker..!
            chunks.push(chunk);
            return;
          }

          // is called when a new chunk of data is ready to be written
          // to the underlying sink. It can return a promise to signal
          // success or failure of the write operation. The stream
          // implementation guarantees that this method will be called
          // only after previous writes have succeeded, and never after
          // close or abort is called.

          // TODO: Kind of important that service worker respond back when
          // it has been written. Otherwise we can't handle backpressure
          // EDIT: Transfarable streams solvs this...
          channel.port1.postMessage(chunk);
          bytesWritten += chunk.length;

          if (downloadUrl) {
            location.href = downloadUrl;
            downloadUrl = null;
          }
        },
        close() {
          if (useBlobFallback) {
            const blob = new Blob(chunks, {
              type: 'application/octet-stream; charset=utf-8',
            });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
          } else {
            channel.port1.postMessage('end');
          }
        },
        abort() {
          chunks = [];
          channel.port1.postMessage('abort');
          channel.port1.onmessage = null;
          channel.port1.close();
          channel.port2.close();
          channel = null;
        },
      },
      opts.writableStrategy
    )
  );
}
