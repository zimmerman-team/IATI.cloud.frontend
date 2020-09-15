import React from 'react';
import { Route } from 'react-router';
import { CoreFiltersFragment } from 'app/modules/querybuilder-module/fragments/core-filters';
import { AdditionalFiltersSubModule } from 'app/modules/querybuilder-module/fragments/additional-filters';
import { OutputFormatSubModule } from 'app/modules/querybuilder-module/fragments/output-format';
import { ResultsSubModule } from 'app/modules/querybuilder-module/fragments/results';

export const QueryBuilderRoutes = () => {
  return (
    <>
      <Route path="/querybuilder/core-filters">
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
    </>
  );
};
