import React from "react";
import { storiesOf } from "@storybook/react";
import Providers from "app/Providers";
import { Container, Grid } from "@material-ui/core";
import { DocCallPreview } from "app/modules/Documentation/common/DocCallPreview";

storiesOf('Modules|API Documentation', module).add('Preview', () => (
  <Providers>
    {/*<DebugBox>*/}
    <Container maxWidth="xl">
      <Grid container>
        <Grid item md={5}>
          <DocCallPreview />
        </Grid>
      </Grid>
    </Container>
    {/*</DebugBox>*/}
  </Providers>
));
