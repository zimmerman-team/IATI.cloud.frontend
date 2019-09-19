import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Header } from 'app/components/surfaces/Header';

type ModuleModel = {
  title: string;
  description?: string;
};

export const ModuleHeader = (props: ModuleModel) => {
  return (
    <Header>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4" color="textSecondary">
            {props.title}
          </Typography>
          {props.description && (
            <>
          <Box height="27px" width="100%" />
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>
          </>
          )}
        </Grid>
      </Grid>
    </Header>
  );
};
