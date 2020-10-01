import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import { IATILogoWhite } from '../../svgs/IATILogo';
import LogoZZ from '../../../assets/images/logo_zz.png';
import { Mail, Twitter } from '@material-ui/icons';
import React from 'react';

export const FooterMD = () => {
  return (
    <Box
      bgcolor="#155366"
      width="100%"
      position="absolute"
      padding="40px 0"
      data-cy="Footer"
    >
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={6}>
          {/*Top*/}
          <Grid item>
            <a
              href="https://iatistandard.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the iati standard page"
            >
              <IATILogoWhite />
            </a>
          </Grid>

          {/*Middle*/}
          <Grid container item direction="row" justify="space-between">
            {/*Left item*/}
            <Grid item style={{alignSelf: "center"}} >
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ marginRight: '16px', textAlign: 'center', marginBottom: '8px' }}
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

            {/*Right Item*/}
            <Grid container item direction="column" spacing={2} style={{ width: 'unset' }}>
              <Grid item style={{ display: 'flex' }} >
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
              <Grid item style={{ display: 'flex' }} >
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

          {/*Bottom*/}
          <Grid item>
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
      </Container>
    </Box>
  );
};
