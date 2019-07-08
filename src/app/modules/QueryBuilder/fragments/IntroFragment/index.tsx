/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* project component */
/* common */
/* config & mock */
import { fragmentConfig } from './config';

export const IntroFragment = () => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant="h3">{fragmentConfig.name}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant="body1">{fragmentConfig.description}</Typography>
      </Grid>
    </Grid>
  );
};
