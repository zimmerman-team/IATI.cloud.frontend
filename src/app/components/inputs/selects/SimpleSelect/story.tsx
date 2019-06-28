import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleSelect from '.';
import { Grid } from '@material-ui/core';
import Providers from 'app/Providers';

const mockData = ['Yes', 'No'];
storiesOf('Inputs|Selects/', module).add('Simple Select', () => (
  <Providers>
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <SimpleSelect data={mockData} />
        </Grid>
        <Grid item xs={6}>
          <SimpleSelect data={mockData} />
        </Grid>
      </Grid>
      <Grid container spacing={4} direction="column">
        <Grid item xs={3}>
          <SimpleSelect data={mockData} />
        </Grid>
        <Grid item xs={3}>
          <SimpleSelect data={mockData} />
        </Grid>
      </Grid>
    </div>
  </Providers>
));
