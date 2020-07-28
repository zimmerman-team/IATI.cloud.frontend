//cc:application modules#;api documentation module
//cc:api documentation module#; main
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import { DocsideBar } from 'app/modules/documentation-module/common/DocSideBar';
import { Header } from 'app/components/surfaces/Header';
import docStore from 'app/modules/documentation-module/state/store';
import { DocumentationRoutes } from 'app/modules/documentation-module/routes';
import useTitle from 'react-use/lib/useTitle';

function DocumentationModule() {
  useTitle('IATI Datastore - Documentation');

  return (
    <StoreProvider store={docStore}>
      {/*<Redirect to="/documentation/introduction" />*/}
      <Header />
      <Container maxWidth="lg">
        <Grid container direction="row">
          <Grid item md={4}>
            <DocsideBar />
          </Grid>
          <Grid item md={8}>
            <DocumentationRoutes />
          </Grid>
        </Grid>
      </Container>
    </StoreProvider>
  );
}

export default DocumentationModule;
