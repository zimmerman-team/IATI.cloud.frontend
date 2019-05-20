import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
