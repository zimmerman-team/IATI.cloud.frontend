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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h6">
            <LinkMod to="/" data-cy="appbar-title">
              {process.env.REACT_APP_CLIENT_NAME}
            </LinkMod>
          </Typography>
          <Grid>
            <AppBarButton label="Welcome" url="/" data-cy="appbar-button1" />
            <AppBarButton
              label="Query builder"
              url="/querybuilder"
              data-cy="appbar-button2"
            />
            {/*<AppBarButton label="API documentation" link="" data-cy="appbar-button3"/>*/}
            {/*<AppBarButton label="Github" data-cy="appbar-button4"/>*/}
          </Grid>
        </Grid>
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
