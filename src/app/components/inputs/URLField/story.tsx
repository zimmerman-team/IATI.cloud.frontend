import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from 'src/app/components/inputs/URLField/index';
import Providers from 'src/app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Data display|URL Field', module).add('Example', () => (
  <Providers>
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Component />
      </Grid>
    </Grid>
  </Providers>
));
