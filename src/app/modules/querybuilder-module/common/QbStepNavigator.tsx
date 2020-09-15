import React from 'react';
import { Box, Grid } from '@material-ui/core';

export const QbStepNavigator = (props: { children: React.ReactNode }) => {
  const childCount = React.Children.count(props.children);

  return (
    <Grid item xs={12} lg={12}>
      <Box
        display="flex"
        justifyContent={childCount > 1 ? 'space-between' : 'flex-end'}
        marginTop="50px"
      >
        {props.children}
      </Box>
    </Grid>
  );
};
