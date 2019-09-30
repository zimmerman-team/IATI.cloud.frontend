import React from "react";

import { ApiListItemModel } from "app/modules/Documentation/common/DocDetail/common/lists/ApiBaseList/model";
import { Collection } from "app/modules/Documentation/state/model";

export const ApiListItem = (props: ApiListItemModel) => {
  return (
    <li
      css={`
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: rgba(34, 34, 34, 0.38);
      `}
    >
      {props.name}
    </li>
  );
};

export const ApiList = (props: Collection) => {
  return (
    <ul>
      {props.item &&
        props.item.map(endpoint => <ApiListItem name={endpoint.name} />)}
    </ul>
  );
};
