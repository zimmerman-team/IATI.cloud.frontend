import React from 'react';
import { Route, Switch } from 'react-router';
import { DocDetail } from 'app/modules/Documentation/common/DocDetail';
import { DocLanding } from 'app/modules/Documentation/common/DocLanding';
import { InView } from 'react-intersection-observer';
import { Grid } from '@material-ui/core';

export const DocumentationRoutes = () => {
  return (
    <div
      css={`
        position: sticky;
        top: 187px;
        overflow-y: scroll;
        height: calc(100vh - 187px);
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <Switch>
        <Route
          exact
          path="/documentation/introduction"
          render={() => <DocLanding />}
        />
        <Route
          path="/documentation/:_postman_id"
          render={({ match }) => (
            <DocDetail _postman_id={match.params._postman_id} />
          )}
        />
      </Switch>
    </div>
  );
};
