import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';

export const DocExampleLayout = () => {
  return (
    <Grid container spacing={4}>

      {/* ------------------------------------------------------------------ */}
      {/* tab container: use router? */}
      {/* todo: make proper navigator */}
      <Grid item md={12}>
        <Grid container spacing={4}>
          <Grid item md={5}>
            <Skeletor height={'55px'} />
          </Grid>
          <Grid item md={5}>
            <Skeletor height={'55px'} />
          </Grid>
        </Grid>
      </Grid>

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={"40px"}/>

      {/* ------------------------------------------------------------------ */}
      {/* fragment 1  */}
      {/* todo: check with siem what to actually show here */}
      <Grid item md={12}>
        <Skeletor height={'100px'} />
      </Grid>

      {/* ------------------------------------------------------------------ */}

      <Box width="100%" height={'40px'} />

      {/* ------------------------------------------------------------------ */}
      {/* fragment 2  */}

      <Grid item md={12}>
        <Skeletor height={'100px'} />
      </Grid>

      {/* ------------------------------------------------------------------ */}
      {/* fragment 3  */}
    </Grid>
  );
};
