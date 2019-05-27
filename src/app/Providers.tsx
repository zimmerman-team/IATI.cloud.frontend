import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import 'index.css';
const Providers: React.FunctionComponent = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Providers;
