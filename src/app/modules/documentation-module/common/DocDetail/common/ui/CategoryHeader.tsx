import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export const CategoryHeader = ({ category }) => {
  return (
    <>
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
    </>
  );
};
