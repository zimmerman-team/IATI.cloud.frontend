import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions, useStoreState } from 'app/state/store';
import { ApplicationStoreModel } from 'app/state/models';
import { BorgCollectiveModel, BorgModel } from 'app/state/models/CyborgModel';
import { useEffectOnce } from 'react-use';
import { useQuery } from 'react-fetching-library';
import { fetchBorgList } from 'app/state/api/actions';
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

  const addBorg = useStoreActions(
    actions => actions.borgCollective.addBorgUnit
  );
  const fetchBorgs = useStoreActions(actions => actions.borgCollective.fetch);
  const fetchedBorgs = useStoreState(state => state.borgCollective.data);

  const borg: BorgModel = {
    id: '2442242442',
    assimilationDate: 'khjwehjkwkj'
  };

  useEffectOnce(() => {
    console.log('Running effect once on mount');
    // fetchBorgs();
    // addBorg(borg);
    // addBorg(borg);
    // addBorg(borg);

    // const patat: BorgModel = fetchedBorgs;
    // const noges = fetchedBorgs;
    // console.log('fetched, maar leeg', noges);
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  // console.log('fetched and well', fetchedBorgs);

  fetchOrganisationTypes().then(r => console.log('organisation types loaded'));
  fetchOrganisations().then(r => console.log('organisationsloaded'));
  fetchSectorCategories().then(r => console.log('sector categories loaded'));
  fetchRegions().then(r => console.log('regions loaded'));
  // fetchSectors();
  // fetchCountries();

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
