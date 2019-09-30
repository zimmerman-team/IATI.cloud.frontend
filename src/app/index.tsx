import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
import SnackBar from 'app/components/feedback/SnackBar';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <MainRoutes />
      <SnackBar open={props.openSnackbar} />
    </Providers>
  );
}

export default App;
