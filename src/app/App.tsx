import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Providers from './Providers';
import theme from 'app/theme';

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
