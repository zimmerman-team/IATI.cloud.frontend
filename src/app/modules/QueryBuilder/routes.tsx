import React from 'react';
import { Route, Switch } from 'react-router';
import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/steps/additional-filters';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/steps/output-format';
import { ResultsSubModule } from 'app/modules/QueryBuilder/steps/results';

export const QueryBuilderRoutes = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/querybuilder/core-filters"
          render={() => <OrganisationFragment />}
        />
        <Route
          exact
          path="/querybuilder/additional-filters"
          render={() => <AdditionalFiltersSubModule />}
        />
        <Route
          exact
          path="/querybuilder/output-format"
          render={() => <OutputFormatSubModule />}
        />
        <Route
          exact
          path="/querybuilder/results"
          render={() => <ResultsSubModule />}
        />
      </Switch>
    </>
  );
};
