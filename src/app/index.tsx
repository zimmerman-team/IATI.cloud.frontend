import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from './Providers';

import Routes from './Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from './components/feedback/SnackBar';

type AppProps = {
  openSnackbar?: boolean;
};

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <Providers>
      <Router>
        <AppBar />
        <Routes />
        <SnackBar
          message="New content is available and will be used when all tabs of this page are closed "
          open={props.openSnackbar}
        />
      </Router>
    </Providers>
  );
};

export default App;
