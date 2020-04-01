import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ArticleCard } from 'app/components/surfaces/Cards/ArticleCard';
export const LandingMidSection = () => {
  return (
    <>
      <Box bgcolor="white" paddingTop="80px" paddingBottom="80px">
        <Grid container direction="row" spacing={8}>
          <Grid item sm={12} md={6} lg={4}>
            <ArticleCard
              loaded
              title="About Datastore"
              description="The Datastore uses OIPA, an open-source tool created by Zimmerman & Zimmerman. OIPA extracts and stores raw IATI XML files from the IATI Registry and makes it available as API endpoints to build data driven information solutions."
              buttonLabel="More"
              path="/about"
              target="_self"
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <ArticleCard
              loaded
              title="Query Builder"
              description="Use the Query Builder to easily search IATI data based on selected filters and have it returned in spreadsheet (CSV or XLS), JSON and XML formats."
              buttonLabel="More"
              path="/querybuilder/core-filters"
              target="_self"
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <ArticleCard
              loaded
              title="API Documentation"
              description="For guidance on how to form API queries and the available endpoints and filters please see the OIPA’s technical documentation."
              buttonLabel="More"
              path="/documentation/introduction"
              target="_blank"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
