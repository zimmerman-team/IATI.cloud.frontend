/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
/* project component */
import DataTable from 'app/components/datadisplay/tables/DataTable';
/* common */

import {
  FragmentDivider,
} from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */

export const ResultFragment = () => {
  return (
    <Hidden only={['xs', 'sm']}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4">Result</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body1">
            2 activities, 24 financial transactions, 4 budget entries Last data
            refreshed at DD/MM/YYYY
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography style={{ marginLeft: '24px' }} variant="h6">
            Output sample
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <DataTable />
        </Grid>
      </Grid>
      <FragmentDivider />
    </Hidden>
  );
};
