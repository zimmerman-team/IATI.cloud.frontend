import React from 'react';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Box } from '@material-ui/core';
import { useEffectOnce, useTitle } from 'react-use';
import { useParams } from 'react-router';
import { Root } from 'app/modules/Documentation/state/RootModel';
import {
  MainCategoryModel,
  SubCategory1Model,
} from 'app/modules/Documentation/state/model';
import { CategoryHeader } from 'app/modules/Documentation/common/DocDetail/common/ui/CategoryHeader';
import { SubCategoryFragment } from 'app/modules/Documentation/common/DocDetail/common/ui/SubCategoryFragment';

/* -------------------------------------------------------------------------- */
/* DocDetail */
/* -------------------------------------------------------------------------- */
export const DocDetail = () => {
  let { _postman_id } = useParams();

  // @ts-ignore
  const data: Root = useStoreState(state => state.data && state.data);
  const categories: MainCategoryModel[] = data && data.collection.item;

  // @ts-ignore
  const category: SubCategory1Model =
    categories &&
    categories.find(category => category._postman_id === _postman_id);

  return (
    <React.Fragment>
      <Box height="20px" />
      {category && <CategoryHeader category={category} />}

      {/* -------------------- */}
      {/* map through cattegories */}
      {category &&
        // @ts-ignore
        category.item.map(item => (
          <SubCategoryFragment item={item} key={item._postman_id} />
        ))}
      {/* ---------- */}
      <Box height="50vh" />
    </React.Fragment>
  );
};

/* -------------------------------------------------------------------------- */
