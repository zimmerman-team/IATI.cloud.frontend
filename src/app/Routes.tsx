import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions } from 'app/state/store';
import { useEffectOnce } from 'react-use';
const LandingModule = lazy(() => import('app/modules/Landing'));
const QueryBuilderModule = lazy(() => import('app/modules/QueryBuilder'));

function Routes() {
  /* todo: refactor, doesn't quite feel right to do initiate the fetches like this */
  const fetchOrganisationTypes = useStoreActions(
    actions => actions.organisationTypes.fetch
  );
  const fetchOrganisations = useStoreActions(
    actions => actions.organisations.fetch
  );
  const fetchSectorCategories = useStoreActions(
    actions => actions.sectorCategories.fetch
  );
  const fetchRegions = useStoreActions(actions => actions.regions.fetch);
  const fetchSectors = useStoreActions(actions => actions.sectors.fetch);
  const fetchCountries = useStoreActions(actions => actions.countries.fetch);
  const fetchBorgs = useStoreActions(actions => actions.borgCollective.fetch);

  useEffectOnce(() => {
    console.log('Running effect once on mount');
    fetchOrganisationTypes();
    fetchOrganisations();
    fetchSectorCategories();
    fetchRegions();
    fetchBorgs();
    // fetchSectors();
    // fetchCountries();

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path="/querybuilder"
          render={() => <QueryBuilderModule />}
        />
        <Route exact path="/" render={() => <LandingModule />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
