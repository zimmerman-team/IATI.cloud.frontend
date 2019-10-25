/* core */
/* third-party */
import Container from '@material-ui/core/Container';
import { PageContainer } from 'app/modules/common/PageContainer';
/* fragments */
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { QueryBuilderRoutes } from 'app/modules/QueryBuilder/routes';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import { NavigationButton } from './NavigationButton';
import { StepNavigatorContainer } from './StepNavigatorContainer';
/* config & mock */
export type NavButtonModel = {
  label: string;
  path: string;
};

export const navButtons: NavButtonModel[] = [
  {
    label: 'Core Filters',
    path: '/querybuilder/core-filters',
  },
  {
    label: 'Additional Filters',
    path: '/querybuilder/additional-filters',
  },
  {
    label: 'Output Format',
    path: '/querybuilder/output-format',
  },
  {
    label: 'Results',
    path: '/querybuilder/results',
  },
];

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */

  return (
    <PageContainer>
      {/* module header */}
      <ModuleHeader
        title="Query Builder"
        description="The Query Builder allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format."
      />

      {/* step navigator */}
      <StepNavigatorContainer>
        <Container maxWidth="lg">
          <Grid container>
            <Box height="40px" width="100%" />

            <Grid item md={12} style={{ position: 'relative' }}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                {navButtons.map(item => (
                  <NavigationButton
                    key={item.label}
                    path={item.path}
                    label={item.label}
                  />
                ))}
              </Box>
              <Box
                width="100%"
                borderBottom="1px solid #e2e2e2"
                position={'absolute'}
                bottom="3px"
              />
            </Grid>

            <Box height="40px" width="100%" />

            <Grid item md={12}>
              <QueryBuilderRoutes />
            </Grid>

            <Box height="40px" width="100%" />
          </Grid>
        </Container>
      </StepNavigatorContainer>
    </PageContainer>
  );
};
