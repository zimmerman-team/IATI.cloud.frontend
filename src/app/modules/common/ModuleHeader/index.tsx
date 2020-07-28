import React from 'react';
import { Box, Grid, Typography, useTheme } from '@material-ui/core';
import { Header } from 'app/components/surfaces/Header';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { useWindowScroll } from 'react-use';

type ModuleModel = {
  title?: string;
  description?: string;
};

export const ModuleHeader = (props: ModuleModel) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const { x, y } = useWindowScroll();

  console.log(x, y);

  return (
    <Header>
      <Grid container item xs={12} lg={6}>
        {props.title && (
          <Typography variant={md ? 'h6' : 'h4'} color="textSecondary">
            {props.title}
          </Typography>
        )}
        {props.description && (
          <>
            <Box height="27px" width="100%" />
            <Typography variant="body2" color="textSecondary">
              {props.description}
            </Typography>
          </>
        )}
      </Grid>
    </Header>
  );
};
