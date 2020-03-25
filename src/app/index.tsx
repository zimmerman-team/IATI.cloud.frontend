//cc:application base#;application index

import React from 'react';
import Providers from 'app/Providers';
import { MainRoutes } from 'app/Routes';
import { BannerNotice } from 'app/components/feedback/Banners/BannerNotice';

function App() {
  return (
    <Providers>
      <BannerNotice />
      <MainRoutes />
    </Providers>
  );
}

export default App;
