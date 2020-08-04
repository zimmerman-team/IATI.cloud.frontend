//cc:application base#;application providers
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'app/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import appStore from './state/store';
/* todo: refactor, rather not load in "oldscool" css */
import 'index.css';
import { Client } from './state/api/Client';
import { ClientContextProvider } from 'react-fetching-library';

type ProviderProps = {
  children?: ReactNode;
};

function Providers(props: ProviderProps) {
  return (
    /* material ui theme provider*/
    <ThemeProvider theme={theme}>
      {/* redux store provider*/}
      <StoreProvider store={appStore}>
        <ClientContextProvider client={Client}>
          {/* react router */}
          <Router>{props.children}</Router>
        </ClientContextProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default Providers;
