import { Box, Grid, Link, Typography } from '@material-ui/core';
import { IATILogoWhite } from '../../svgs/IATILogo';
import { Mail, Twitter } from '@material-ui/icons';
import LogoZZ from '../../../assets/images/logo_zz.png';
import React from 'react';

export const FooterSM = () => {
  return (
    <Box
      bgcolor="#155366"
      width="100%"
      position="absolute"
      padding="32px 0"
      data-cy="Footer"
    >
      <Grid container direction="column" justify="center">
        {/*LOGO*/}
        <Grid item style={{alignSelf: "center", marginBottom: '32px'}}>
          <a
            href="https://iatistandard.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the iati standard page"
          >
            <IATILogoWhite />
          </a>
        </Grid>

        {/*CONTACT */}
        <Grid container item direction="column" style={{ alignContent: 'center', marginBottom: '42px' }}>
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

        {/*ZZ LOGO*/}
        <Grid item style={{alignSelf: "center", marginBottom: '80px'}} >
          <Typography
            variant="body1"
            color="textSecondary"
            style={{textAlign: 'center', marginBottom: '23px' }}
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

        {/*LICENSE  */}
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
              GNU AGPL.
            </Link>
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
          >
            Documentation licensed under{' '}
            <Link
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              CC BY 4.0.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
