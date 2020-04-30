//cc:application base#;root index

import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'app';
import * as serviceWorker from 'serviceWorker';

// this import looks unused; it isn't so please do not remove
import * as _ from 'styled-components/cssprop';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
