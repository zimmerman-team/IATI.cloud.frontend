//cc:application base#;application routes

import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions } from 'app/state/store';
import { useEffectOnce } from 'react-use';
import { PageNotFound } from 'app/modules/notfound-module';

import AboutModule from 'app/modules/about-module';
import LandingModule from 'app/modules/landing-module';
import QueryBuilderModule from 'app/modules/querybuilder-module';

const DocumentationModule = lazy(
  () => import('app/modules/documentation-module')
);

export function MainRoutes() {
  /* todo: refactor, doesn't quite feel right to do initiate the fetches like this */
  const fetchOrganisationTypes = useStoreActions(
      (actions) => actions.organisationTypes.fetch
    ),
    fetchOrganisations = useStoreActions(
      (actions) => actions.organisations.fetch
    ),
    fetchSectorCategories = useStoreActions(
      (actions) => actions.sectorCategories.fetch
    ),
    fetchSectorVocabularies = useStoreActions(
      (actions) => actions.sectorVocabularies.fetch
    ),
    fetchRegions = useStoreActions((actions) => actions.regions.fetch),
    fetchSectors = useStoreActions((actions) => actions.sectors.fetch),
    fetchCountries = useStoreActions((actions) => actions.countries.fetch),
    fetchActivityStatus = useStoreActions(
      (actions) => actions.activityStatus.fetch
    ),
    fetchActivityScope = useStoreActions(
      (actions) => actions.activityScope.fetch
    ),
    fetchAidType = useStoreActions((actions) => actions.aidType.fetch),
    fetchAidTypeCategory = useStoreActions(
      (actions) => actions.aidTypeCategory.fetch
    ),
    fetchAidTypeVocabulary = useStoreActions(
      (actions) => actions.aidTypeVocabulary.fetch
    ),
    fetchDefaultCurrency = useStoreActions(
      (actions) => actions.defaultCurrency.fetch
    ),
    fetchCollaborationType = useStoreActions(
      (actions) => actions.collaborationType.fetch
    ),
    fetchSecondaryReporter = useStoreActions(
      (actions) => actions.secondaryReporter.fetch
    );

  useEffectOnce(() => {
    //console.log('Running effect once on mount');
    fetchOrganisationTypes();
    fetchOrganisations();
    fetchSectorCategories();
    fetchSectorVocabularies();
    fetchRegions();
    fetchSectors();
    fetchCountries();
    fetchSecondaryReporter();
    return () => {
      //console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/querybuilder">
          <QueryBuilderModule />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <LandingModule />
        </Route>
        <Route path="/documentation">
          <DocumentationModule />
        </Route>
        <Route exact path="/about">
          <AboutModule />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
