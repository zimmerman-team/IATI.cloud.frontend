import React from 'react';
import { NavLink } from 'react-router-dom';
import { ApiListItemModel } from 'app/modules/Documentation/common/DocDetail/common/ApiBaseList/model';
import { Collection } from 'app/modules/Documentation/state/model';
import { LandingEndpointItem } from 'app/modules/Documentation/common/DocDetail/common/ApiBaseList/common/ui/LandingEndpointItem';

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
          <ApiListItem
            name={endpoint.name}
            id={endpoint._postman_id}
            key={endpoint._postman_id}
          />
        ))}
    </ul>
  );
};
