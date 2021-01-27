import React, { useState } from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import styled, { css } from 'styled-components/macro';
import { AppBarButton } from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { IATILogoColor } from 'app/components/svgs/IATILogo';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import { DrawerMenu } from 'app/components/navigation/Drawer';
import { mockData as drawerMockData } from 'app/components/navigation/Drawer/mock';
import useDocumentScrollThrottled from 'app/components/surfaces/AppBar/utils';
import useCookie from '@devhammed/use-cookie';
import { covidBannerCookieKey } from 'app/components/feedback/Banners/CovidBanner';
// import { useCookie } from 'react-use';

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

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
  // const [shouldShrink, setShouldShowShadow] = useState(false);
  // const MINIMUM_SCROLL = 180;
  // const TIMEOUT_DELAY = 400;

  // useDocumentScrollThrottled((callbackData) => {
  //   const { previousScrollTop, currentScrollTop } = callbackData;
  //   const isScrolledDown = previousScrollTop < currentScrollTop;
  //   const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

  //   setShouldShowShadow(isMinimumScrolled);
  // });

  /* this hook is for setting the cookie */
  const [cookie, setCookie] = useCookie(covidBannerCookieKey, true);
  // const [value, updateCookie, deleteCookie] = useCookie("my-cookie");

  /* this hook is for visually hiding the component */
  const [visible, setVisibility] = useState(cookie);

  const shadowStyle = props.shrink
    ? css`
        height: 50px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        //margin-top: -25px;
        margin-top: ${visible ? `0` : `-25px`};
      `
    : css`
        height: 100px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        margin-top: 0;
      `;

  return (
    <React.Fragment>
      <div
        css={`
          position: absolute;
          opacity: ${props.shrink ? `1` : `0`};
          z-index: -1;
          width: 100vw;
          height: 90px;
          top: ${props.shrink ? `-50px` : `-150px`};
          /* top: -150px; */
          /* top: -50px; */
          background-color: #1a5161;
          transition: all 200ms ease-out;
          @media all and (max-width: 1040px) {
            height: 100px;
          }
        `}
      />
      <BaseComponent
        position="static"
        elevation={1}
        css={shadowStyle}
        {...props}
        data-cy="AppBar"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={8} md={5} lg={5}>
            <Link to="/" aria-label="Link to Home page">
              <IATILogoColor
                css={`
                  transition: transform 100ms ease-out;
                  transform: ${props.shrink
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
              <AppBarButton shrink={props.shrink} label="HOME" url="/home" />
              <AppBarButton shrink={props.shrink} label="ABOUT" url="/about" />
              <AppBarButton
                shrink={props.shrink}
                label="QUERY BUILDER"
                url="/querybuilder/core-filters"
              />
              <AppBarButton
                shrink={props.shrink}
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
