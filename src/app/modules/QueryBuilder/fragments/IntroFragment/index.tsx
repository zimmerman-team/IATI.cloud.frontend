/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* project component */
/* common */
/* config & mock */
import { fragmentConfig } from './model';

export const IntroFragment = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant="h4" color="textSecondary">{fragmentConfig.name}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant="body2" color="textSecondary">{fragmentConfig.description}</Typography>
      </Grid>
    </Grid>
  );
};
