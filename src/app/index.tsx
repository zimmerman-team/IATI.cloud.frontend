import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from './Providers';

import Routes from './Routes';
import AppBar from 'app/components/surfaces/AppBar';

const App: React.FunctionComponent = () => {
  return (
    <Providers>
      <Router>
        <AppBar />
        <Routes />
      </Router>
    </Providers>
  );
};

export default App;
