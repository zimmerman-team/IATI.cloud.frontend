import React from 'react';
import { Route, Switch } from 'react-router';
import { CoreFiltersFragment } from 'app/modules/QueryBuilder/fragments/core-filters';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/fragments/additional-filters';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/fragments/output-format';
import { ResultsSubModule } from 'app/modules/QueryBuilder/fragments/results';

export const QueryBuilderRoutes = () => {
  return (
    <React.Fragment>
      {/*<Switch>*/}
      <Route exact path="/querybuilder/core-filters">
        <CoreFiltersFragment />
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
      {/*// </Switch>*/}
    </React.Fragment>
  );
};
