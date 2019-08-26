/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Grid,
  Typography as MuiTypography,
  Container,
  Box,
} from '@material-ui/core';
import { Mail, Phone, Star } from '@material-ui/icons';
import { IATILogoWhite } from 'app/components/svgs/IATILogo';
import { ZZLogo } from 'app/components/svgs/ZZLogo';
import styled from 'styled-components';

// TODO: When Text Catalog is implemented in Zeplin, refactor to use the right Typography variants
const Typography1 = styled(props => (
  <MuiTypography {...props} color="textSecondary" />
))`
  && {
    font-family: Chalet-LondonNineteenSixty;
    font-size: 16px;
    line-height: 2.25;
  }
`;

const Typography2 = styled(props => (
  <MuiTypography {...props} color="textSecondary" />
))`
  && {
    font-family: Chalet-LondonNineteenSixty;
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const Footer = () => {
  return (
    // Normally I would use a container component for this, however I can't get a 100% width on this component when implemented in the page layouts.

    <Box bgcolor="#155366" width="100%" position="absolute" bottom="0">
      <Container maxWidth="lg">
        {/*LEFT ITEM*/}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ height: '200px' }}
        >
          <Grid item>
            <IATILogoWhite />
          </Grid>

          {/*MIDDLE ITEM*/}
          <Grid item>
            <Grid container direction="column" justify="space-between">
              <Grid container item alignItems="center">
                <Phone style={{ marginRight: '16px', fill: 'white' }} />
                <Typography1 variant="caption">+31 (0)00 000 00 00</Typography1>
              </Grid>
              <Grid container item alignItems="center">
                <Mail style={{ marginRight: '16px', fill: 'white' }} />
                <Typography1 variant="caption">
                  info@iatistandard.org
                </Typography1>
              </Grid>
              <Grid container item alignItems="center">
                <Star style={{ marginRight: '16px', fill: 'white' }} />
                <Typography1 variant="caption">@iati</Typography1>
              </Grid>
            </Grid>
          </Grid>

          {/*RIGHT ITEM*/}
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid container item alignItems="center">
                  <Typography2
                    variant="caption"
                    style={{ marginRight: '16px' }}
                  >
                    powered by OIPA from
                  </Typography2>
                  <ZZLogo />
                </Grid>
              </Grid>

              {/*This one is confusing, couldn't get the type to align center.*/}
              <Grid
                container
                // item
                style={{ marginTop: '32px', width: '350px' }}
                wrap="wrap"
              >
                <Typography2 variant="caption" align="center">
                  Code licensed under the GNU AGPL. Documentation licensed under
                  CC BY 3.0.
                </Typography2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
