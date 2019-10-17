import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ApiItemDivider } from 'app/modules/Documentation/common/DocDetail/common/utils/ui';
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
