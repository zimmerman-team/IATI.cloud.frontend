import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import theme from 'app/theme';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-use';
import { Link } from 'react-router-dom';

const LinkMod = styled(Link)`
  text-decoration: none;
  color: white;
`;

type Props = {
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

const AppBar: React.FC<Props> = props => {
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
          {/* todo: define the client name in the env file */}
          <Typography variant="h6">
            <LinkMod to="/">OIPA</LinkMod>
          </Typography>
          <Grid>
            <AppBarButton label="Welcome" url="/" />
            <AppBarButton label="Query builder" url="/querybuilder" />
            {/*<AppBarButton label="API documentation" link="" />*/}
            {/*<AppBarButton label="Github" />*/}
          </Grid>
        </Grid>
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
