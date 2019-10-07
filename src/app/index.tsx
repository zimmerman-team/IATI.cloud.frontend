import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
import SnackBar from 'app/components/feedback/SnackBar';
import { BannerNotice } from 'app/components/feedback/Banners/BannerNotice';

type AppProps = {
  openSnackbar?: boolean;
};

function App(props: AppProps) {
  return (
    <Providers>
      <BannerNotice />
      <MainRoutes />
      <SnackBar open={props.openSnackbar} />
    </Providers>
  );
}

export default App;
