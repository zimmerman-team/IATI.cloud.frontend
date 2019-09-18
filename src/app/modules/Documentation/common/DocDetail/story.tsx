import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocDetailModule } from '.';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import { DocsideBar } from 'app/modules/Documentation/common/DocSideBar';


storiesOf('Modules|API Documentation', module).add('Detail', () => (
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
