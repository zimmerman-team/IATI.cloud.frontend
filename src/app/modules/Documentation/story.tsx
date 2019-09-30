import React from "react";
import { storiesOf } from "@storybook/react";

import Providers from "app/Providers";
import { Container, Grid } from "@material-ui/core";
import { DocsideBar } from "app/modules/Documentation/common/DocSideBar";
import { DocCallPreview } from "app/modules/Documentation/common/DocCallPreview";
import { DocDetail } from "app/modules/Documentation/common/DocDetail";
import { sidebarConfig } from "app/modules/Documentation/common/DocSideBar/mock";

storiesOf('Modules|API Documentation', module).add('Detail total', () => (
  <Providers>
    {/*<DebugBox>*/}
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item md={3}>
          <DocsideBar
            sideBarItems={sidebarConfig.sideBarItems}
            categories={sidebarConfig.categories}
          />
        </Grid>
        <Grid item md={5}>
          <DocDetail />
        </Grid>
        <Grid item md={4}>
          <DocCallPreview />
        </Grid>
      </Grid>
    </Container>
    {/*</DebugBox>*/}
  </Providers>
));
