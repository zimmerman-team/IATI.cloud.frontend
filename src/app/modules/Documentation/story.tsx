import React from 'react';
import { storiesOf } from '@storybook/react';

import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import { DocsideBar } from 'app/modules/Documentation/common/DocSideBar';
import { DocDetailModule } from "app/modules/Documentation/common/DocDetail";
import { DocExampleModule } from "app/modules/Documentation/common/DocExample";

storiesOf('Modules|API Documentation', module).add('Detail total', () => (
  <Providers>
    <DebugBox>

      <Container maxWidth="xxl">
        <Grid container spacing={4}>
          <Grid item md={3}>
            <DocsideBar />
          </Grid>
          <Grid item md={5}>
            <DocDetailModule />
          </Grid>
          <Grid item md={4}>
            <DocExampleModule />
          </Grid>
        </Grid>
      </Container>
    </DebugBox>
  </Providers>
));
