import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocDetail } from '.';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';

storiesOf('Modules|API Documentation', module).add('Detail', () => (
  <Providers>
    {/*<DebugBox>*/}

    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <DocDetail />
        </Grid>
      </Grid>
    </Container>
    {/*</DebugBox>*/}
  </Providers>
));
