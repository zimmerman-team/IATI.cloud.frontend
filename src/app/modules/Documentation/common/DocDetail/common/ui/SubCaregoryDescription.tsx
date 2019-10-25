import React from 'react';
import { Grid, Typography } from '@material-ui/core';
export const SubCaregoryDescription = ({ item }) => {
  return (
    <Grid item md={12}>
      <Typography variant="body2">
        {item.description && item.description}
      </Typography>
    </Grid>
  );
};
