import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from './Providers';

import Routes from './Routes';

const App: React.FunctionComponent = () => {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  );
};

export default App;
