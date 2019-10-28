import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import { AppBarButton } from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { IATILogoColor } from 'app/components/svgs/IATILogo';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';

type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    position: sticky;
    top: 40px;

    @media (min-width: 768px) {
      padding-right: 45px;
    }

    @media (max-width: 768px) {
      padding-right: 20px;
      height: 70px;
    }
  }
`;

export const AppBar = (props: AppBarProps) => {
  return (
    <BaseComponent position="static" elevation={0} {...props}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={8} md={5} lg={5}>
          <Link to="/">
            <IATILogoColor
              css={`
                @media (max-width: 768px) {
                  transform: scale(0.7) translateX(-50px);
                }
              `}
            />
          </Link>
        </Grid>

        <Hidden lgUp>
          <DrawerMenu links={drawerMockData.links} />
        </Hidden>

        <Hidden mdDown>
          <Grid
            item
            md={7}
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <AppBarButton label="HOME" url="/" />
            <AppBarButton label="ABOUT" url="/about" />
            <AppBarButton
              label="QUERY BUILDER"
              url="/querybuilder/core-filters"
            />
            <AppBarButton
              label="API DOCUMENTATION"
              url="/documentation/introduction"
            />
          </Grid>
        </Hidden>
      </Grid>
    </BaseComponent>
  );
};
