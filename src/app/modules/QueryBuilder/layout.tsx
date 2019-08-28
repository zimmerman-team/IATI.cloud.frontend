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
import { Grid } from '@material-ui/core';
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
        <IntroFragment />
        {/*<FragmentDivider />*/}
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
