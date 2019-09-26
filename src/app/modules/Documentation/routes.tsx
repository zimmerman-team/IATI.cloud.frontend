import React from 'react';
import { Route, Switch } from 'react-router';
import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/steps/additional-filters';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/steps/output-format';
import { ResultsSubModule } from 'app/modules/QueryBuilder/steps/results';
import { DocDetail } from 'app/modules/Documentation/common/DocDetail';
import { DocLanding } from 'app/modules/Documentation/common/DocLanding';

export const DocumentationRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/documentation/introduction"
        render={() => <DocLanding />}
      />
      <Route path="/documentation/:id" component={DocDetail} />
    </Switch>
  );
};
