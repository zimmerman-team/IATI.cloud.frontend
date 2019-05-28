import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import NoSsr from '@material-ui/core/NoSsr';
import 'index.css';
const Providers: React.FunctionComponent = props => {
  return (
    <ThemeProvider theme={theme}>
      {/*<React.StrictMode>*/}
      <NoSsr>{props.children}</NoSsr>
      {/*</React.StrictMode>*/}
    </ThemeProvider>
  );
};

export default Providers;
