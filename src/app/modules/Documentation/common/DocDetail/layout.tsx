import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';

export const DocDetailLayout = () => {
  return (
    <Grid container>
      {/* header */}
      <Grid item md={12}>
        {/*<Typography variant="h6">Lorem ipsum empty header</Typography>*/}
        <Skeletor />
      </Grid>

      <Box width={'100%'} height={'30px'} />

      {/* description */}
      <Grid item md={12}>
        <Skeletor height="100px" />
      </Grid>

      <Box width={'100%'} height={'30px'} />

      {/* links */}
      <Grid item md={12}>
        <Skeletor height={'25px'} />
      </Grid>

      <Box width={'100%'} height={'40px'} />
    </Grid>
  );
};
