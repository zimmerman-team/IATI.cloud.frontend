import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TextButton } from 'app/components/inputs/buttons/TextButton';

export const QbStepNavigatorButton = ({ label, path }) => {
  return (
    <Grid item xs={4} md={2}>
      <Link to={path}>
        <TextButton label={label} />
      </Link>
    </Grid>
  );
};
