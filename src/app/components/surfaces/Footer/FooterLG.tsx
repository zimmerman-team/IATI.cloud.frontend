import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { IATILogoWhite } from '../../svgs/IATILogo';
import { Mail, Twitter } from '@material-ui/icons';
import LogoZZ from '../../../assets/images/logo_zz.png';
import React from 'react';

export const FooterLG = () => {
  return (
    <Box
      bgcolor="#155366"
      width="100%"
      position="absolute"
      bottom="0"
      data-cy="Footer"
    >
      <Container maxWidth="lg">
        {/* LEFT ITEM */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          css={`
            height: 200px;
          `}
        >
          <Grid
            item
            md={12}
            lg={4}
            css={`
              display: flex;
            `}
          >
            <a
              href="https://iatistandard.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the iati standard page"
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
                    aria-label="Link to the Zimmerman page"
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
                item
                css={`
                  width: 350px;
                  margin-top: 32px;
                `}
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
