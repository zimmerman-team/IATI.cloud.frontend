import React from "react";
import Container from "@material-ui/core/Container";
import { HeaderModel } from "app/components/surfaces/Header/model";
import { Background } from "app/components/surfaces/Background";
import { AppBar } from "app/components/surfaces/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import BackgroundImage from "app/assets/images/DottedMap.svg";

export const Header = (props: HeaderModel) => {
  return (
    <div
      css={`
        //position: relative;
        background-image: url(${BackgroundImage}),
          linear-gradient(to bottom, #3e8c9f, #2b5d69 35%, #135062);
        background-repeat: no-repeat;
        background-position: center right;
        padding-bottom: 47px;
        padding-top: 40px;
        position: sticky;
        top: -50px;
        z-index: 20;
      `}
    >
      <Container maxWidth={"lg"}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <AppBar />
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
