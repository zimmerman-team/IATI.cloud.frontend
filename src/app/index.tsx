//cc:application base#;application index

import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
import { BannerNotice } from 'app/components/feedback/Banners/BannerNotice';
import Grid from '@material-ui/core/Grid';
import { AppBar } from 'app/components/surfaces/AppBar';
import { PageContainer } from 'app/modules/common/PageContainer';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Providers>
      {/*<BannerNotice />*/}
      <Container maxWidth="lg">
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: center;

            z-index: 200;
            position: fixed;
            width: 1040px;
            top: 40px;
          `}
        >
          <AppBar />
        </div>
      </Container>
      <MainRoutes />
    </Providers>
  );
}

export default App;
