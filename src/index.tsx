//cc:app index

import React from 'react';
import { hydrate, render } from 'react-dom';
import 'index.css';
import App from 'app';
import * as serviceWorker from 'serviceWorker';
import * as _ from 'styled-components/cssprop';

/*import LogRocket from 'logrocket';
LogRocket.init('zimmerman-zimmerman/querybuilder');

LogRocket.identify('JIM_FUNG', {
  name: 'Jin Fung',
  email: 'jim@fung.io',
});*/
//
// import Reactotron from 'reactotron-react-js';
//
// Reactotron.configure() // we can use plugins here -- more on this later
//   .connect();

const rootElement = document.getElementById('root');

if (rootElement != null) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/*if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}*/
