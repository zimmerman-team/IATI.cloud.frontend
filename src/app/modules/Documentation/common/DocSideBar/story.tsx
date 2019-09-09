import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocsideBar } from '.';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';

storiesOf('Modules|API Documentation', module).add('Sidebar', () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={4}>
          {/*<DebugBox>*/}
            <DocsideBar />
          {/*</DebugBox>*/}
        </Grid>
      </Grid>
    </Container>
  </Providers>
));
