import React from 'react';
import { Grid } from '@material-ui/core';
import { NavButton } from 'app/modules/documentation-module/common/DocDetail/common/DocCallPreview/common/RequestNavigator/common/NavButton/NavButton';

export const RequestNavigator = () => {
  return (
    <Grid
      container
      spacing={0}
      css={`
        position: sticky;
        top: 0;
        background-color: #5b6673;
      `}
    >
      <Grid item md={4}>
        <NavButton label="Node" path="/" />
      </Grid>
      <Grid item md={4}>
        <NavButton label="Ruby" path="/" />
      </Grid>
      <Grid item md={4}>
        <NavButton label="Python" path="/" />
      </Grid>
    </Grid>
  );
};
