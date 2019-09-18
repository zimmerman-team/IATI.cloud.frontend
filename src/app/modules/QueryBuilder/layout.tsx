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
import { QueryBuilderRoutes } from 'app/modules/QueryBuilder/routes';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
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
      {/* module header */}
      <ModuleHeader />

      {/* step navigator */}
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
    </PageContainer>
  );
};
