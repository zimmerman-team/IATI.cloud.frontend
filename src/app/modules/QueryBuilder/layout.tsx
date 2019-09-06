/* core */
/* third-party */
import Container from '@material-ui/core/Container';
import { Header } from 'app/components/surfaces/Header';
import { PageContainer } from 'app/modules/common/PageContainer';
/* fragments */
import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import { DebugBox } from 'app/utils/layout';
import { Route, Switch } from 'react-router';

import { OrganisationFragment } from 'app/modules/QueryBuilder/steps/organisation';
import { AdditionalFiltersSubModule } from 'app/modules/QueryBuilder/steps/additional-filters';
import { OutputFormatSubModule } from 'app/modules/QueryBuilder/steps/output-format';
import { ResultsSubModule } from 'app/modules/QueryBuilder/steps/results';
import { NavLink } from 'react-router-dom';
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

export const NavigationButton = (props: NavButtonModel) => {
  return (
    <NavLink
      to={props.path}
      activeStyle={{ borderBottom: '4px solid #03dbe4' }}
    >
      <Box
        width="235px"
        height="30px"
        bgcolor="grey"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        fontStyle="normal"
        lineHeight="1.5"
        letterSpacing="0.15px"
        textAlign="center"
        color="black"

      >
        {props.label}
      </Box>
    </NavLink>
  );
};

export const QueryBuilderLayout = () => {
  /* reference to the module store which is passed onto the fragments */

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
        <Grid container>
          <Box height="40px" width="100%" />
          <Grid item md={12}>
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
          </Grid>

          <Box height="40px" width="100%" />

          <Grid item md={12}>
            <Switch>
              <Route
                exact
                path="/querybuilder/core-filters"
                render={() => <OrganisationFragment />}
              />
              <Route
                exact
                path="/querybuilder/additional-filters"
                render={() => <AdditionalFiltersSubModule />}
              />
              <Route
                exact
                path="/querybuilder/output-format"
                render={() => <OutputFormatSubModule />}
              />
              <Route
                exact
                path="/querybuilder/results"
                render={() => <ResultsSubModule />}
              />
            </Switch>
          </Grid>

          <Box height="40px" width="100%" />
        </Grid>
      </Container>
    </PageContainer>
  );
};
