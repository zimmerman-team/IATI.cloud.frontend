import React from "react";
import { NavLink } from "react-router-dom";
import { ApiListItemModel } from "app/modules/Documentation/common/DocDetail/common/ApiBaseList/model";
import { Collection } from "app/modules/Documentation/state/model";
import styled from "styled-components";

const LandingEndpointItem = styled.li`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(34, 34, 34, 0.38);
`;

export const ApiListItem = (props: ApiListItemModel) => {
  return (
    <LandingEndpointItem>
      <NavLink to={'/documentation/' + props.id}>{props.name}</NavLink>
    </LandingEndpointItem>
  );
};

export const ApiList = (props: Collection) => {
  return (
    <ul>
      {props.item &&
        props.item.map(endpoint => (
          <ApiListItem name={endpoint.name} id={endpoint._postman_id} />
        ))}
    </ul>
  );
};
