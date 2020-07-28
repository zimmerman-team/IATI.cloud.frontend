import React, { useState } from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import styled, { css } from 'styled-components';
import { AppBarButton } from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { IATILogoColor } from 'app/components/svgs/IATILogo';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';

import { useDebounce, useWindowScroll } from 'react-use';
import useDocumentScrollThrottled from 'app/components/surfaces/AppBar/utils';

type AppBarProps = {
  label?: string;
  size?: string;
  shrink?: boolean;
};

const baseStyle = css`
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  margin-top: 0;
`;

const shrunkStyle = css`
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  margin-top: -25px;
`;

const BaseComponent = styled((props) => <BaseAppBar {...props} />)`
  && {
    /*  height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;*/

    transition: all 100ms ease-out;

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
  // const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShrink, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 150;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    /*setTimeout(() => {
      setShouldShowShadow(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
*/

    setShouldShowShadow(isMinimumScrolled);

    /*setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);*/
  });

  const shadowStyle = shouldShrink ? shrunkStyle : baseStyle;
  // const shrinkMode = shouldShowShadow ? true : false;

  console.log(shadowStyle);

  return (
    <React.Fragment>
      <div
        css={`
          position: absolute;
          opacity: ${shouldShrink ? `1` : `0`};
          z-index: -1;
          width: 100vw;
          height: 100px;
          top: ${shouldShrink ? `-50px` : `-150px`};
          //top: -50px;
          background-color: #1a5161;
          transition: all 200ms ease-out;
        `}
      />
      <BaseComponent
        position="static"
        elevation={1}
        css={shadowStyle}
        {...props}
        data-testid="AppBar"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={8} md={5} lg={5}>
            <Link to="/">
              <IATILogoColor
                css={`
                  transition: transform 100ms ease-out;
                  transform: ${shouldShrink
                    ? `scale(0.5) translateX(-125px)`
                    : `scale(1) translateX(0)`};
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
              css={`
                display: flex;
                justify-content: space-around;
                height: 100%;
              `}
            >
              <AppBarButton shrink={shouldShrink} label="HOME" url="/" />
              <AppBarButton shrink={shouldShrink} label="ABOUT" url="/about" />
              <AppBarButton
                shrink={shouldShrink}
                label="QUERY BUILDER"
                url="/querybuilder/core-filters"
              />
              <AppBarButton
                shrink={shouldShrink}
                label="API DOCUMENTATION"
                url="/documentation"
              />
            </Grid>
          </Hidden>
        </Grid>
      </BaseComponent>
    </React.Fragment>
  );
};
