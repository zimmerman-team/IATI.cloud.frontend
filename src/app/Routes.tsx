import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions } from 'app/state/store';
import { useEffectOnce } from 'react-use';
import { About } from 'app/modules/About';
import { DocModule } from 'app/modules/Documentation';

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
  const fetchActivityStatus = useStoreActions(
    actions => actions.activityStatus.fetch
  );
  const fetchActivityScope = useStoreActions(
    actions => actions.activityScope.fetch
  );
  const fetchAidType = useStoreActions(actions => actions.aidType.fetch);
  const fetchAidTypeCategory = useStoreActions(
    actions => actions.aidTypeCategory.fetch
  );
  const fetchAidTypeVocabulary = useStoreActions(
    actions => actions.aidTypeVocabulary.fetch
  );
  const fetchDefaultCurrency = useStoreActions(
    actions => actions.defaultCurrency.fetch
  );
  const fetchCollaborationType = useStoreActions(
    actions => actions.collaborationType.fetch
  );
  const fetchDefaultFlowType = useStoreActions(
    actions => actions.defaultFlowType.fetch
  );
  const fetchHierarchy = useStoreActions(
    actions => actions.hierarchy.fetch
  );
  const fetchFinanceType = useStoreActions(
    actions => actions.financeType.fetch
  );
  // const fetchTransactionProviderOrgs = useStoreActions(
  //   actions => actions.transactionProviderOrgs.fetch
  // );
  // const fetchTransactionReceiverOrgs = useStoreActions(
  //   actions => actions.transactionReceiverOrgs.fetch
  // );
  // const fetchParticipatingOrgs = useStoreActions(
  //   actions => actions.participatingOrgs.fetch
  // );

  useEffectOnce(() => {
    console.log('Running effect once on mount');
    fetchOrganisationTypes();
    fetchOrganisations();
    fetchSectorCategories();
    fetchRegions();
    fetchActivityStatus();
    fetchSectors();
    fetchCountries();
    // fetchTransactionProviderOrgs();
    // fetchTransactionReceiverOrgs();
    // fetchParticipatingOrgs();
    fetchActivityScope();
    fetchAidType();
    fetchAidTypeCategory();
    fetchAidTypeVocabulary();
    fetchDefaultCurrency();
    fetchCollaborationType();
    fetchDefaultFlowType();
    fetchHierarchy();
    fetchFinanceType();

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path="/querybuilder/:code"
          render={() => <QueryBuilderModule />}
        />
        <Route exact path="/" render={() => <LandingModule />} />
        <Route exact path="/documentation" render={() => <DocModule />} />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
