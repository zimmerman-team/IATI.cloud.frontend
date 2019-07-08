/* core */
import React from 'react';
/* third-party*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
/* common*/
import { FragmentProps } from 'app/modules/QueryBuilder/fragments/common';

export const ModuleFragment = (props: FragmentProps) => {
  return (
    <>
      {props.name && props.description && (
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Box marginBottom={1}>
              <Typography variant="h6" color="textPrimary">
                {props.name}
              </Typography>
            </Box>
            <Box marginBottom={10}>
              <Typography variant="body2" color="textSecondary">
                {props.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
      <Grid container spacing={4} sm={12} md={9}>
        {props.children}
      </Grid>
    </>
  );
};
