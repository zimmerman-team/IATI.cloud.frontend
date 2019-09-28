import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import { DocCallPreview } from 'app/modules/Documentation/common/DocCallPreview';
import { DocsideBar } from 'app/modules/Documentation/common/DocSideBar';
import { Header } from 'app/components/surfaces/Header';
import docStore from 'app/modules/Documentation/state/store';
import { DocumentationRoutes } from 'app/modules/Documentation/routes';

export const DocumentationModule = () => {
  return (
    <StoreProvider store={docStore}>
      <Container maxWidth="xl">
        <Grid container>
          <Header />
          <Grid item md={3}>
            <DocsideBar />
          </Grid>
          <Grid item md={5}>
            <DocumentationRoutes />
          </Grid>
          <Grid item md={4}>
            <DocCallPreview />
          </Grid>
        </Grid>
      </Container>
    </StoreProvider>
  );
};
