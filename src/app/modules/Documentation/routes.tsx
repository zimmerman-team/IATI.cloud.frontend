import React from "react";
import { Route, Switch } from "react-router";
import { DocDetail } from "app/modules/Documentation/common/DocDetail";
import { DocLanding } from "app/modules/Documentation/common/DocLanding";
import styled from "styled-components";

const RouteContainer = styled.div`
  position: sticky;
  top: 187px;
  overflow-y: scroll;
  height: calc(100vh - 187px);
  padding-left: 20px;
  padding-right: 20px;
`;

export const DocumentationRoutes = () => {
  return (
    <RouteContainer>
      <Switch>
        <Route exact path="/documentation/introduction">
          <DocLanding />
        </Route>
        <Route path="/documentation/:_postman_id">
          <DocDetail />
        </Route>
      </Switch>
    </RouteContainer>
  );
};
