//cc:application base#;root index

import React from 'react';
import { hydrate, render } from 'react-dom';
import 'index.css';
import App from 'app';
// import * as serviceWorker from 'serviceWorker';

// this import looks unused; it isn't so please do not remove
import * as _ from 'styled-components/cssprop';

const rootElement = document.getElementById('root');

if (rootElement != null) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

/* for now we're leaving the serviceworker disabled*/
/*if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}*/
