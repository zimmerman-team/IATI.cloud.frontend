import React from 'react';
import { Box, Grid, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
export const QbStepNavigator = (props: { children: React.ReactNode }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  // console.log(React.Children.count(props.children));

  const childCount = React.Children.count(props.children);

  // const justify = if(childCount > 1){return "space-in-between";}else{return "flex-end";}

  return (
    <Grid item lg={12}>
      <Box
        display="flex"
        justifyContent={childCount > 1 ? 'space-between' : 'flex-end'}
        // width="100%"
        marginTop="50px"
        // padding="16px"
      >
        {props.children}
      </Box>
    </Grid>
  );
};
