import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
export const SubCaregoryDescription = ({ item }) => {
  return (
    <Grid item md={12}>
      <Typography variant="body2">
        {item.description && item.description}
      </Typography>
      <Box height={'20px'} width={'20px'} />
    </Grid>
  );
};
