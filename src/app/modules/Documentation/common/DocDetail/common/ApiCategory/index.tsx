import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
import {
  MainCategoryModel,
  SubCategory1Model,
  SubCategory2Model,
  SubCategory3Model,
} from 'app/modules/Documentation/state/model';

export const ApiCategory = (
  props:
    | MainCategoryModel
    | SubCategory1Model
    | SubCategory2Model
    | SubCategory3Model
) => {
  return (
    <Grid container spacing={4}>
      <ApiItemDivider />
      <Grid item md={12}>
        <Typography variant="h4">{props.name}</Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="body2">{props.description}</Typography>
      </Grid>
    </Grid>
  );
};
