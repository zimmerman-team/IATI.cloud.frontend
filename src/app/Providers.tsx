import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from 'app/theme';
import NoSsr from '@material-ui/core/NoSsr';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import 'index.css';

const Providers: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Router>{props.children}</Router>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default Providers;
