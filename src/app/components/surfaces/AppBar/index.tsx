import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { IATILogoColor } from 'app/components/svgs/IATILogo';

type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    padding: 20px 45px 20px 20px;
    background-color: white;
  }
`;

const AppBar = (props: AppBarProps) => {
  return (
    <BaseComponent position="static" elevation={0} {...props}>
      <Toolbar disableGutters>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <IATILogoColor />
          </Grid>

          <Grid item>
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
