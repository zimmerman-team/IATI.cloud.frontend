import React from 'react';

import { ApiCategory } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory';
import { ApiDocModel } from 'app/modules/Documentation/model';

export const DocDetail = (props: ApiDocModel) => {
  return (
    <>
      
      {props.apiDocCategories &&
        props.apiDocCategories.map(category => (
          <ApiCategory
            key={category.categoryName}
            categoryName={category.categoryName}
            categoryDesc={category.categoryDesc}
            categoryCalls={category.categoryCalls}
          />
        ))}
    </>
  );
};