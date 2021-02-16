// @ts-nocheck
//cc:api documentation module#; content - api category/call detail
import React from 'react';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router';
import { Root } from 'app/modules/documentation-module/state/RootModel';
import {
  MainCategoryModel,
  SubCategory1Model,
} from 'app/modules/documentation-module/state/model';
import { CategoryHeader } from 'app/modules/documentation-module/common/DocDetail/common/ui/CategoryHeader';
import { SubCategoryFragment } from 'app/modules/documentation-module/common/DocDetail/common/ui/SubCategoryFragment';

/* -------------------------------------------------------------------------- */
/* DocDetail */
/* -------------------------------------------------------------------------- */
export const DocDetail = () => {
  let { _postman_id } = useParams();

  // @ts-ignore
  const data: Root = useStoreState((state) => state.data && state.data);
  const categories: MainCategoryModel[] = data && data.collection.item;

  // @ts-ignore
  const category: SubCategory1Model =
    categories && categories.find((category) => category.id === _postman_id);

  return (
    <React.Fragment>
      <Box height="20px" />
      {category && <CategoryHeader category={category} />}

      {/* -------------------- */}
      {/* map through cattegories */}
      {category &&
        // @ts-ignore
        category.item.map((item) => (
          <SubCategoryFragment item={item} key={item.id} />
        ))}
      {/* ---------- */}
    </React.Fragment>
  );
};

/* -------------------------------------------------------------------------- */
