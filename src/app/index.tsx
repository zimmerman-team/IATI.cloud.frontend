import React from 'react';
import Providers from './Providers';
import Routes from './Routes';
import AppBar from 'app/components/surfaces/AppBar';

const App: React.FunctionComponent = () => {
  return (
    <Providers>
      <AppBar />
      <Routes />
    </Providers>
  );
};

export default App;
