//cc:query builder module#; query builder main layout
/* third-party */
import React from "react";
import { Box, Grid, useTheme } from "@material-ui/core";
import Container from "@material-ui/core/Container";
/* fragments */
import { PageContainer } from "app/modules/common/PageContainer";
import { QueryBuilderRoutes } from "app/modules/QueryBuilder/routes";
import { ModuleHeader } from "app/modules/common/ModuleHeader";
import { NavigationButton } from "app/modules/QueryBuilder/common/NavigationButton";
import { StepNavigatorContainer } from "app/modules/QueryBuilder/common/StepNavigatorContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { Redirect } from "react-router-dom";
import "styled-components/macro";
import { ResetDialog } from "app/modules/QueryBuilder/common/ResetDialog";

/* config & mock */
export type NavButtonModel = {
  label: string;
  path: string;
  index: number;
};

export const navButtons: NavButtonModel[] = [
  {
    label: "Core Filters",
    path: "/querybuilder/core-filters",
    index: 1,
  },
  {
    label: "Additional Filters",
    path: "/querybuilder/additional-filters",
    index: 2,
  },
  {
    label: "Output Format",
    path: "/querybuilder/output-format",
    index: 3,
  },
  {
    label: "Results",
    path: "/querybuilder/results",
    index: 4,
  },
];

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <PageContainer>
      {/* <div
        css={`
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <ResetDialog />
      </div> */}
      {/* module header */}
      <ModuleHeader
        title="Query Builder"
        description="The Query Builder allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format."
      />

      {/* step navigator */}

      <Redirect to="/querybuilder/core-filters" />

      <StepNavigatorContainer>
        <Container maxWidth="lg">
          <Grid container>
            <Box height="40px" width="100%" />

            <Grid
              item
              md={12}
              style={{ position: "relative" }}
              css={`
                overflow-x: auto;
              `}
            >
              {/* todo: convoluted; refactor */}
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
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
              </Box>
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
