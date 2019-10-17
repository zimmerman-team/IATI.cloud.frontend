import React from 'react';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Box, Grid, Typography } from '@material-ui/core';
import { useEffectOnce, useTitle } from 'react-use';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
import { ApiCallFragment } from 'app/modules/Documentation/common/DocDetail/common/ApiCallFragment';
import { useParams } from 'react-router';
import { Root } from 'app/modules/Documentation/state/RootModel';
import {
  MainCategoryModel,
  SubCategory1Model,
} from 'app/modules/Documentation/state/model';

export const CategoryHeader = ({ category }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} id={category.name}>
        <Grid item md={12}>
          <Typography variant="h3">{category.name}</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body2">
            {category.description && category.description}
          </Typography>
        </Grid>
      </Grid>
      <Box height="40px" />
    </React.Fragment>
  );
};

export const SubCategoryHeader = ({ item }) => {
  return (
    <React.Fragment>
      <ApiItemDivider />
      <Grid item md={12}>
        <Typography variant="h5">{item.name}</Typography>
      </Grid>
      <ApiItemDivider />
    </React.Fragment>
  );
};

export const SubCaregoryDescription = ({ item }) => {
  return (
    <Grid item md={12}>
      <Typography variant="body2">
        {item.description && item.description}
      </Typography>
    </Grid>
  );
};

export const CallFragment = ({ item }) => (
  <React.Fragment>
    {item.request && <ApiCallFragment data={item} key={item._postman_id} />}

    {item.item &&
      item.item.map(item => (
        <React.Fragment key={item._postman_id}>
          <ApiCallFragment data={item} />
          {/* -------------------- */}
          {item.item &&
            item.item.map(subItem => (
              <ApiCallFragment data={subItem} key={subItem.name} />
            ))}
          {/* ---------- */}
        </React.Fragment>
      ))}
  </React.Fragment>
);

export const SubCategoryFragment = ({ item }) => (
  <Grid container spacing={2} id={item.name} key={item.name}>
    {item._postman_isSubFolder && <SubCategoryHeader item={item} />}

    <Box height="20px" />

    {item.description && <SubCaregoryDescription item={item} />}

    <Box height="20px" />

    <CallFragment item={item} />
  </Grid>
);

/* -------------------------------------------------------------------------- */
/* DocDetail */
/* -------------------------------------------------------------------------- */
export const DocDetail = () => {
  let { _postman_id } = useParams();

  // @ts-ignore
  const data: Root = useStoreState(state => state.data && state.data);
  const categories: MainCategoryModel[] = data && data.collection.item;

  // const categories = useStoreState(state => state.collection.item);
  // @ts-ignore
  const category: SubCategory1Model =
    categories &&
    categories.find(category => category._postman_id === _postman_id);

  /* if (category) {
    useEffectOnce(() => {
      console.log('Running effect once on mount');
      useTitle('API Documentation - ' + category.name);
      return () => {
        console.log('Running clean-up of effect on unmount');
      };
    });
  }*/

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
