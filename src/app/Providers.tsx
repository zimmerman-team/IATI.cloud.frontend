import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'app/theme';

const Providers: React.FunctionComponent = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Providers;
