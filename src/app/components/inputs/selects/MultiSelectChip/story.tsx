import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';
import { Grid } from '@material-ui/core';

storiesOf('Inputs|Selects/', module).add('Multi Select Chips ', () => (
  <Providers>
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Component label="Multi select with label" />
        </Grid>
        <Grid item xs={6}>
          <Component
            label="Multi select with assistive text"
            helperText="Assitive text"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} direction="column">
        <Grid item xs={3}>
          <Component
            label="Multi select with tooltip"
            tooltip="This is a tooltip"
          />
        </Grid>
        <Grid item xs={3}>
          <Component
            label="Multi select with placeholder"
            placeholder="Select something..."
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} direction="row">
        <Grid item xs={6}>
          <Component label="Multi select with search" search />
        </Grid>
        <Grid item xs={6}>
          <Component
            label="Multi select with all options"
            tooltip="This is a tooltip"
            helperText="Assitive text"
            placeholder="Select something..."
            search
          />
        </Grid>
      </Grid>
    </div>
  </Providers>
));
