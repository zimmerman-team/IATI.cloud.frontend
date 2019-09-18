import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import { DocDetailModule } from "app/modules/Documentation/common/DocDetail";


storiesOf('Modules|API Documentation', module).add('Example', () => (
  <Providers>
    <DebugBox>
      // @ts-ignore
      <Container maxWidth="xxl">
        <Grid container spacing={4}>
          <Grid item md={5}>
            <DocDetailModule />
          </Grid>
        </Grid>
      </Container>
    </DebugBox>
  </Providers>
));
