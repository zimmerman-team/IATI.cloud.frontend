import React from 'react';
import Container from '@material-ui/core/Container';
import { HeaderModel } from 'app/components/surfaces/Header/model';
import { Background } from 'app/components/surfaces/Background';
import { AppBar } from 'app/components/surfaces/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

export const Header = (props: HeaderModel) => {
  return (
    <Background>
      <Container maxWidth={'lg'}>
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
    </Background>
  );
};
