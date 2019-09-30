import React from 'react';
import { Route, Switch } from 'react-router';
import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/steps/additional-filters';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/steps/output-format';
import { ResultsSubModule } from 'app/modules/QueryBuilder/steps/results';

export const QueryBuilderRoutes = () => {
  return (
    <Switch>
      <Route exact path="/querybuilder/core-filters">
        <OrganisationFragment />
      </Route>
      <Route exact path="/querybuilder/additional-filters">
        <AdditionalFiltersSubModule />
      </Route>
      <Route exact path="/querybuilder/output-format">
        <OutputFormatSubModule />
      </Route>
      <Route exact path="/querybuilder/results">
        <ResultsSubModule />
      </Route>
    </Switch>
  );
};
