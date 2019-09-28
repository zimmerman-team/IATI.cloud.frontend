import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions } from 'app/state/store';
import { useEffectOnce } from 'react-use';
import { About } from 'app/modules/About';
import { DocumentationModule } from 'app/modules/Documentation';

const LandingModule = lazy(() => import('app/modules/Landing'));
const QueryBuilderModule = lazy(() => import('app/modules/QueryBuilder'));

export function MainRoutes() {
  /* todo: refactor, doesn't quite feel right to do initiate the fetches like this */
  const fetchOrganisationTypes = useStoreActions(
      actions => actions.organisationTypes.fetch
    ),
    fetchOrganisations = useStoreActions(
      actions => actions.organisations.fetch
    ),
    fetchSectorCategories = useStoreActions(
      actions => actions.sectorCategories.fetch
    ),
    fetchRegions = useStoreActions(actions => actions.regions.fetch),
    fetchSectors = useStoreActions(actions => actions.sectors.fetch),
    fetchCountries = useStoreActions(actions => actions.countries.fetch),
    fetchActivityStatus = useStoreActions(
      actions => actions.activityStatus.fetch
    ),
    fetchActivityScope = useStoreActions(
      actions => actions.activityScope.fetch
    ),
    fetchAidType = useStoreActions(actions => actions.aidType.fetch),
    fetchAidTypeCategory = useStoreActions(
      actions => actions.aidTypeCategory.fetch
    ),
    fetchAidTypeVocabulary = useStoreActions(
      actions => actions.aidTypeVocabulary.fetch
    ),
    fetchDefaultCurrency = useStoreActions(
      actions => actions.defaultCurrency.fetch
    ),
    fetchCollaborationType = useStoreActions(
      actions => actions.collaborationType.fetch
    ),
    fetchSecondaryReporter = useStoreActions(
      actions => actions.secondaryReporter.fetch
    );

  useEffectOnce(() => {
    console.log('Running effect once on mount');
    fetchOrganisationTypes();
    fetchOrganisations();
    fetchSectorCategories();
    fetchRegions();
    fetchSectors();
    fetchCountries();
    fetchSecondaryReporter();
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/querybuilder">
          <QueryBuilderModule />
        </Route>
        <Route exact path="/">
          <LandingModule />
        </Route>
        <Route path="/documentation">
          <DocumentationModule />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Suspense>
  );
}
