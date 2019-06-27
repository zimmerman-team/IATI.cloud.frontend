import React from 'react';
import { hydrate, render } from 'react-dom';
import 'index.css';
import App from 'app';
import * as serviceWorker from 'serviceWorker';

const rootElement = document.getElementById('root');
console.log('Do we have a rootElement??');
console.log(rootElement);
if (rootElement != null) {
  console.log('so this is slower then the serviceworker ');
  if (rootElement.hasChildNodes()) {
    hydrate(
      <App openSnackbar={serviceWorker.isUpdateAvailable} />,
      rootElement
    );
  } else {
    render(<App openSnackbar={serviceWorker.isUpdateAvailable} />, rootElement);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
