//cc:query builder module#; query builder main layout
/* third-party */
import React from 'react';
import { Box, Grid, useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
/* fragments */
import { PageContainer } from 'app/modules/common/PageContainer';
import { QueryBuilderRoutes } from 'app/modules/querybuilder-module/routes';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import { NavigationButton } from 'app/modules/querybuilder-module/common/NavigationButton';
import { StepNavigatorContainer } from 'app/modules/querybuilder-module/common/StepNavigatorContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Redirect } from 'react-router-dom';
import Sticky from 'react-stickynode';

/* config & mock */
export type NavButtonModel = {
  label: string;
  path: string;
  index: number;
};

export const navButtons: NavButtonModel[] = [
  {
    label: 'Core Filters',
    path: '/querybuilder/core-filters',
    index: 1,
  },
  {
    label: 'Additional Filters',
    path: '/querybuilder/additional-filters',
    index: 2,
  },
  {
    label: 'Output Format',
    path: '/querybuilder/output-format',
    index: 3,
  },
  {
    label: 'Results',
    path: '/querybuilder/results',
    index: 4,
  },
];

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageContainer>
      {/* module header */}
      <ModuleHeader
        title="Query Builder"
        description="The Query Builder allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format."
        extraText
      />

      {/* step navigator */}

      <Redirect to="/querybuilder/core-filters" />

      <StepNavigatorContainer>
        <Container maxWidth="lg">
          <Grid container>
            <Box height="40px" width="100%" />

            <Sticky
              top={80}
              innerZ={10}
              css={`
                width: 100%;
              `}
            >
              <Grid
                item
                md={12}
                css={`
                  overflow-x: auto;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  height: 70px;
                  background-color: white;
                  width: 100%;
                `}
              >
                {navButtons.map((item) => (
                  // todo: convoluted code, needs refactoring
                  <div
                    css={`
                      display: flex;
                      align-items: center;
                      justify-content: center;

                      &:first-child {
                        #navlink {
                          padding-left: 0;
                        }
                      }

                      &:last-child {
                        #line {
                          display: none;
                        }

                        #navlink {
                          padding-right: 0;
                        }
                      }
                    `}
                    key={item.label}
                  >
                    <NavigationButton
                      path={item.path}
                      label={item.label}
                      index={item.index}
                    />

                    <div
                      id="line"
                      css={`
                        width: 108px;
                        height: 1px;
                        background-color: #165163;
                      `}
                    />
                  </div>
                ))}
              </Grid>
            </Sticky>

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
