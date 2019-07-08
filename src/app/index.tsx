import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from 'app/components/feedback/SnackBar';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <Router>
        <AppBar data-cy="appbar" />
        <Routes />
        <SnackBar open={props.openSnackbar} />
      </Router>
    </Providers>
  );
}

export default App;
