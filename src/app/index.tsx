import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from 'app/Providers';
import Routes from 'app/Routes';
import AppBar from 'app/components/surfaces/AppBar';
import SnackBar from 'app/components/feedback/SnackBar';

type AppProps = {
  openSnackbar?: boolean;
};

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <Providers>
      <Router>
        <AppBar data-cy="appbar" />
        <Routes />
        <div>So there should be a console.log with</div>
        <SnackBar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          variant="info"
          message="New content is available and will be used when all tabs of this page are closed"
          open={props.openSnackbar}
        />
      </Router>
    </Providers>
  );
};

export default App;
