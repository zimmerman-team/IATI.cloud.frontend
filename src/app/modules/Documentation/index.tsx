import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { sidebarConfig } from 'app/modules/Documentation/common/DocSideBar/mock';
import { DocCallPreview } from 'app/modules/Documentation/common/DocCallPreview';
import { DocDetail } from 'app/modules/Documentation/common/DocDetail';
import { DocsideBar } from 'app/modules/Documentation/common/DocSideBar';
import { ApiDocMock } from 'app/modules/Documentation/mock';
import { DocumentationRoutes } from 'app/modules/Documentation/routes';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import { Header } from 'app/components/surfaces/Header';
import { DocData } from './data';

export const DocumentationModule = () => {
  console.log(DocData.collection.item);

  return (
    <Container maxWidth="xl">
      <Header />
      <Grid container spacing={4}>
        <Grid item md={3}>
          <DocsideBar
            sideBarItems={sidebarConfig.sideBarItems}
            categories={sidebarConfig.categories}
          />
        </Grid>
        <Grid item md={5}>
          <DocumentationRoutes />
          {/*<DocDetail apiDocCategories={ApiDocMock.apiDocCategories} />*/}
        </Grid>
        <Grid item md={4}>
          <DocCallPreview />
        </Grid>
      </Grid>
    </Container>
  );
};
