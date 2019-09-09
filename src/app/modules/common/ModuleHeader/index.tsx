import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Header } from 'app/components/surfaces/Header';

export const ModuleHeader = () => {
  return (
    <Header>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4" color="textSecondary">
            Query builder
          </Typography>
          <Box height="27px" width="100%" />
          <Typography variant="body2" color="textSecondary">
            This tool allows you to build common queries to obtain data from the
            IATI Datastore in CSV, XML and JSON format. You create queries based
            on finding the organisations, and then be configured filter the
            published data down to what you need and elements you want to
            include in your export. You find an example data table snippet of
            your query and your download link in the bottom section.
          </Typography>
        </Grid>
      </Grid>
    </Header>
  );
};
