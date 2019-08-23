import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import theme from 'app/theme';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import useLocation from 'react-use/lib/useLocation';
import { Link } from 'react-router-dom';
import { Box as MuiBox } from '@material-ui/core';

const LinkMod = styled(Link)`
  text-decoration: none;
  color: white;
`;

type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    background-color: ${props => {
      switch (props.location) {
        case '/':
          return 'initial';
        default:
          return theme.palette.grey.greyBase;
      }
    }};
    position: fixed;
    top: 0;
  }
`;

const Box = styled(props => <MuiBox {...props} />)`
  && {
    margin: 20px;
  }
`;

const AppBar = (props: AppBarProps) => {
  const state = useLocation();

  return (
    <BaseComponent
      position="static"
      elevation={0}
      location={state.pathname}
      {...props}
    >
      <Toolbar>
        <Grid container direction="row" alignItems="center">
          {/*<Typography variant="h6">*/}
          {/*  <LinkMod to="/">{process.env.REACT_APP_CLIENT_NAME}</LinkMod>*/}
          {/*</Typography>*/}
          <Grid item>
            <Box height="60px" width="256px" bgcolor="black" />
          </Grid>

          <Grid item justify="space-between">
            <AppBarButton label="HOME" url="/" />
            <AppBarButton label="ABOUT" url="/about" />
            <AppBarButton label="QUERY BUILDER" url="/querybuilder" />
            <AppBarButton label="API DOCUMENTATION" url="/api-documentation" />
            <AppBarButton label="GUIDANCE" url="/guidance" />
          </Grid>
        </Grid>
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
