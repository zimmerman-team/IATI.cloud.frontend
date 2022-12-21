//cc:application base#;application routes

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLoader } from 'app/modules/common/PageLoader';
import { useStoreActions } from 'app/state/store';
import { useEffectOnce } from 'react-use';
import { PageNotFound } from 'app/modules/notfound-module';

import AboutModule from 'app/modules/about-module';
import LandingModule from 'app/modules/landing-module';
import QueryBuilderModule from 'app/modules/querybuilder-module';
import ContactModule from 'app/modules/contact-module';

// const DocumentationModule = React.lazy(
//   () => import('app/modules/documentation-module')
// );

export function MainRoutes() {
  const fetchSecondaryReporter = useStoreActions(
    (actions) => actions.secondaryReporter.fetch
  );

  useEffectOnce(() => {
    fetchSecondaryReporter();
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
        {/* <Route path="/documentation">
          <DocumentationModule />
        </Route> */}
        <Route exact path="/about">
          <AboutModule />
        </Route>
        <Route exact path="/contact">
          <ContactModule />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
