import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from 'app/modules/common/PageLoader';

const Landing = lazy(() => import('app/modules/Landing'));
const QueryBuilder = lazy(() => import('app/modules/QueryBuilder'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/querybuilder" render={() => <QueryBuilder />} />
        <Route exact path="/" render={() => <Landing />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
