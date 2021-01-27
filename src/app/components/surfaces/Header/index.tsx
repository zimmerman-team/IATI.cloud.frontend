import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { HeaderModel } from 'app/components/surfaces/Header/model';
import { AppBar } from 'app/components/surfaces/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import BackgroundImage from 'app/assets/images/DottedMap.svg';
import useCookie from '@devhammed/use-cookie';
import { covidBannerCookieKey } from 'app/components/feedback/Banners/CovidBanner';

export const Header = (props: HeaderModel) => {
  /* this hook is for setting the cookie */
  const [cookie, setCookie] = useCookie(covidBannerCookieKey, 'true');

  /* this hook is for visually hiding the component */
  const [visible, setVisibility] = useState(cookie);
  return (
    <div
      css={`
        //position: relative;
        background-image: url(${BackgroundImage}),
          linear-gradient(to bottom, #3e8c9f, #2b5d69 35%, #135062);
        background-repeat: no-repeat;
        background-position: center right;
        padding-bottom: 47px;
        padding-top: ${visible ? `100px` : `40px`};
        //position: sticky;
        //top: -50px;
        //z-index: 20;
      `}
    >
      <Container maxWidth={'lg'}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/*<AppBar />*/}
            <div
              css={`
                width: 1040px;
                height: 100px;

                @media all and (max-width: 1040px) {
                  width: calc(100% - 50px);
                }
              `}
            />
            {props.children && (
              <>
                <Hidden mdDown>
                  <Box width="100%" height="64px" />
                </Hidden>

                <Hidden lgUp>
                  <Box width="100%" height="15px" />
                </Hidden>
                {props.children}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
