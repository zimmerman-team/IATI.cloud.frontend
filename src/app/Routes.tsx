import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLoader from 'app/modules/common/PageLoader';
import { useActions, useStore } from 'app/store';
const Landing = lazy(() => import('app/modules/Landing'));
const QueryBuilder = lazy(() => import('app/modules/QueryBuilder'));

const Routes: React.FC = () => {
  const fetchOrganisationTypes = useActions(
    actions => actions.organisationTypes.fetch
  );
  const fetchOrganisations = useActions(actions => actions.organisations.fetch);
  const fetchSectors = useActions(actions => actions.sectors.fetch);

  fetchOrganisationTypes();
  fetchOrganisations();
  fetchSectors();

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
