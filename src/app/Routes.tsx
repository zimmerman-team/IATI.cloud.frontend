import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from 'app/modules/common/pageloader/PageLoader';
import Landing from 'app/modules/Landing';

const Routes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default Routes;
