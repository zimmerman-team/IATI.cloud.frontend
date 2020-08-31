//cc:application base#;application index

import React, { useState } from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
// import { BannerNotice } from 'app/components/feedback/Banners/BannerNotice';
import { AppBar } from 'app/components/surfaces/AppBar';
import { PageContainer } from 'app/modules/common/PageContainer';
import { Container } from '@material-ui/core';
import { CovidBanner } from 'app/components/feedback/Banners/CovidBanner';
import useDocumentScrollThrottled from 'app/components/surfaces/AppBar/utils';

function App() {
  const [shouldShrink, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 180;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(isMinimumScrolled);
  });

  return (
    <Providers>
      {/*<BannerNotice />*/}
      <Container maxWidth="lg">
        <div
          css={`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 20;
            position: fixed;
            width: 1040px;
            top: 40px;
            @media all and (max-width: 1040px) {
              width: calc(100% - 50px);
            }
          `}
        >
          <CovidBanner shrink={shouldShrink} />
          <AppBar shrink={shouldShrink} />
        </div>
      </Container>
      <MainRoutes />
    </Providers>
  );
}

export default App;
