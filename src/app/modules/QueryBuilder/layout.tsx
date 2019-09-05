/* core */
/* third-party */
import Container from '@material-ui/core/Container';
import { Header } from 'app/components/surfaces/Header';
import { PageContainer } from 'app/modules/common/PageContainer';
/* fragments */
import { IntroFragment } from 'app/modules/QueryBuilder/fragments';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import React from 'react';
import { QueryBuilderStepper } from './common/stepper/layout';

import { Box, Grid, Typography } from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';
import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { DebugBox } from 'app/utils/layout';
import { Route, Switch } from 'react-router';
import { AdditionalFiltersLayout } from 'app/modules/QueryBuilder/steps/additional-filters/layout';
import { OutputFormatLayout } from 'app/modules/QueryBuilder/steps/output-format/layout';
import { ResultsLayout } from 'app/modules/QueryBuilder/steps/results/layout';
/* config & mock */

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */
  const store = ModuleStore.useStore();
  return (
    <PageContainer>
      <Header>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4" color="textSecondary">
              Query builder
            </Typography>
            <Box height="27px" width="100%" />
            <Typography variant="body2" color="textSecondary">
              This tool allows you to build common queries to obtain data from
              the IATI Datastore in CSV, XML and JSON format. You create queries
              based on finding the organisations, and then be configured filter
              the published data down to what you need and elements you want to
              include in your export. You find an example data table snippet of
              your query and your download link in the bottom section.
            </Typography>
          </Grid>
        </Grid>
      </Header>

      {/* step navigator */}
      <Container maxWidth="lg">
        {/*Grid container spacing={4}>
            <Grid item xs={12}>
              <Skeletor height="200px" width="100%" />
            </Grid>
          </Grid>*/
        /* step content */
        /*<Switch>
            <Route
              exact
              path="/querybuilder/organisation"
              render={() => <OrganisationFragment />}
            />

            <Route
              exact
              path="/querybuilder/filters"
              render={() => <AdditionalFiltersLayout />}
            />

            <Route
              exact
              path="/querybuilder/output"
              render={() => <OutputFormatLayout />}
            />

            <Route
              exact
              path="/querybuilder/results"
              render={() => <ResultsLayout />}
            />
          </Switch>*/}

        <QueryBuilderStepper />

        {/* WHO FRAGMENT */}
        {/*<WhoFragment store={store} />*/}
        {/*<FragmentDivider />*/}

        {/* FILTERS FRAGMENT */}
        {/*<FilterFragment />*/}
        {/*<FragmentDivider />*/}

        {/* OUTPUT FORMAT FRAGMENT */}
        {/*<OutputFragment />*/}
        {/*<FragmentDivider />*/}

        {/* RESULT FRAGMENT */}
        {/* the ResultFragment contains FragmentDivider */}
        {/*<ResultFragment />*/}

        {/* DOWNLOAD FRAGMENT */}
        {/*<DownloadFragment store={store} />*/}
      </Container>
    </PageContainer>
  );
};
