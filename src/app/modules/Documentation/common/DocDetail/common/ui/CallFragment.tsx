import React from 'react';
import { ApiCallFragment } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment';
export const CallFragment = ({ item }) => (
  <React.Fragment>
    {item.request && <ApiCallFragment data={item} key={item._postman_id} />}

    {item.item &&
      item.item.map(item => (
        <React.Fragment key={item._postman_id}>
          <ApiCallFragment data={item} />

          {item.item &&
            item.item.map(subItem => (
              <ApiCallFragment data={subItem} key={subItem.name} />
            ))}
        </React.Fragment>
      ))}
  </React.Fragment>
);