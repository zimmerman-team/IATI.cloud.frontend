import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
import { ApiCallFragment } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/common/ApiCallFragment';
import { ApiCallCategoryModel } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/model';

export const ApiCategory = (props: ApiCallCategoryModel) => {
  return (
    <Grid container spacing={4}>
      <ApiItemDivider />
      <Grid item md={12}>
        <Typography variant="h4">{props.categoryName}</Typography>
      </Grid>
      <Grid item md={12}>
        <Typography variant="body2">{props.categoryDesc}</Typography>
      </Grid>

      {props.categoryCalls.map(item => (
        <ApiCallFragment
          callType={item.callType}
          callDescription={props.categoryDesc}
          callPath={item.callPath}
          callParameters={item.callParameters}
        />
      ))}
    </Grid>
  );
};
