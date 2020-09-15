import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ApiItemDivider } from 'app/modules/documentation-module/common/DocDetail/common/utils/ui';
export const SubCategoryHeader = ({ item }) => {
  return (
    <React.Fragment>
      <ApiItemDivider />
      <Grid item md={12}>
        <Box height={'40px'} width={'100px'} />
        <Typography variant="h5">{item.name}</Typography>
        <Box height={'40px'} width={'100px'} />
      </Grid>
      <ApiItemDivider />
    </React.Fragment>
  );
};
