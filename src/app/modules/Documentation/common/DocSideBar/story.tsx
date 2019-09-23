import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocsideBar } from '.';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { DebugBox } from 'app/utils/layout';
import { sidebarConfig } from 'app/modules/Documentation/common/DocSideBar/mock';

storiesOf('Modules|API Documentation', module).add('Sidebar', () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={4}>
          {/*<DebugBox>*/}
          <DocsideBar
            sideBarItems={sidebarConfig.sideBarItems}
            categories={sidebarConfig.categories}
          />
          {/*</DebugBox>*/}
        </Grid>
      </Grid>
    </Container>
  </Providers>
));
