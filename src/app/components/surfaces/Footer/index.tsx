import React from 'react';
import { Grid, Typography, Container, Box, Link } from '@material-ui/core';
import { Mail, Twitter } from '@material-ui/icons';
import { IATILogoWhite } from 'app/components/svgs/IATILogo';
import LogoZZ from 'app/assets/images/logo_zz.png';

export const Footer = () => {
  return (
    <Box
      bgcolor="#155366"
      width="100%"
      position="absolute"
      bottom="0"
      data-testid="Footer"
    >
      <Container maxWidth="lg">
        {/* LEFT ITEM */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          css={`
            @media only screen and (max-width: 768px) {
              height: 400px;
            }
            height: 200px;
          `}
        >
          <Grid
            item
            md={12}
            lg={4}
            css={`
              display: flex;
              @media only screen and (max-width: 768px) {
                justify-content: center;
              }
            `}
          >
            <a
              href="https://iatistandard.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IATILogoWhite />
            </a>
          </Grid>
          {/* MIDDLE ITEM */}
          <Grid
            item
            md={12}
            lg={4}
            css={`
              display: flex;
              @media only screen and (max-width: 768px) {
                justify-content: center;
              }
            `}
          >
            <Grid
              container
              direction="column"
              justify="space-between"
              spacing={2}
            >
              <Grid container item alignItems="center">
                <Mail style={{ marginRight: '16px', fill: 'white' }} />
                <Typography variant="body1" color="textSecondary">
                  <Link
                    href="mailto:support@iatistandard.org"
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    support@iatistandard.org
                  </Link>
                </Typography>
              </Grid>
              <Grid container item alignItems="center">
                <Twitter style={{ marginRight: '16px', fill: 'white' }} />
                <Typography variant="body1" color="textSecondary">
                  <Link
                    href="https://twitter.com/IATI_aid"
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    @iati
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* RIGHT ITEM */}
          <Grid item md={12} lg={4}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid container item alignItems="center">
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{ marginRight: '16px' }}
                  >
                    powered by
                  </Typography>
                  <a
                    href="https://www.zimmerman.team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="150px"
                      height="auto"
                      src={LogoZZ}
                      alt="zz logo"
                    />
                  </a>
                </Grid>
              </Grid>

              {/* This one is confusing, couldn't get the type to align center. */}
              <Grid
                container
                // item
                style={{ marginTop: '32px', width: '350px' }}
                wrap="wrap"
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  align="center"
                >
                  Code licensed under the{' '}
                  <Link
                    href="https://github.com/zimmerman-zimmerman/iati.cloud.frontend/blob/develop/LICENSE.MD"
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    GNU AGPL
                  </Link>
                  . Documentation licensed under{' '}
                  <Link
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    CC BY 4.0
                  </Link>
                  .
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
