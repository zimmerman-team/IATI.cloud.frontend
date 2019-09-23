import React from 'react';

import {
  ApiListItemModel,
  ApiListModel,
} from 'app/modules/Documentation/common/DocDetail/common/lists/ApiBaseList/model';

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
      {props.label}
    </li>
  );
};

export const ApiList = (props: ApiListModel) => {
  return (
    <ul>
      {props.data && props.data.map(item => <ApiListItem label={item} />)}
    </ul>
  );
};
