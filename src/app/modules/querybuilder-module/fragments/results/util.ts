// @ts-nocheck
import { createWriteStream } from 'app/utils/streamsaver';

export const downloadFile = (url, fileName) => {
  return fetch(url)
    .then((res) => {
      const fileStream = createWriteStream(fileName);
      const writer = fileStream.getWriter();
      if (res.body.pipeTo && globalThis.WritableStream) {
        writer.releaseLock();
        return res.body.pipeTo(fileStream);
      }

      const reader = res.body.getReader();
      const pump = () =>
        reader
          .read()
          .then(({ value, done }) =>
            done ? writer.close() : writer.write(value).then(pump)
          );

      return pump();
    })
    .catch((error) => console.error(error));
};

export const cleanIframes = () => {
  const iframes = document.querySelectorAll('iframe');
  for (let i = 1; i < iframes.length; i++) {
    iframes[i].parentNode.removeChild(iframes[i]);
  }
};

export const getRetrievedItemsLabel = (rowFormat: string, count?: number) => {
  if (rowFormat === 'activity') {
    if (count && count === 1) {
      return 'activity';
    }
    return 'activities';
  }
  if (rowFormat === 'transaction') {
    if (count && count === 1) {
      return 'transaction';
    }
    return 'transactions';
  }
  if (count && count === 1) {
    return 'budget';
  }
  return 'budgets';
};
