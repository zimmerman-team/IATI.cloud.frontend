import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import NoSsr from '@material-ui/core/NoSsr';
import { BrowserRouter as Router } from 'react-router-dom';
import 'index.css';

const Providers: React.FunctionComponent = props => {
  return (
    <ThemeProvider theme={theme}>
      {/*<React.StrictMode>*/}
      <NoSsr>
        <Router>{props.children}</Router>
      </NoSsr>
      {/*</React.StrictMode>*/}
    </ThemeProvider>
  );
};

export default Providers;
