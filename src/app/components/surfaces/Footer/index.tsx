/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import MuiBox from '@material-ui/core/Box';
// import Colors from 'app/theme/color';
import MuiLink from '@material-ui/core/Link';
import { Grid, Typography, Container, Box } from '@material-ui/core';
import { Mail, Phone, Star } from '@material-ui/icons';
import { IATILogoWhite } from 'app/components/svgs/IATILogo';
import { ZZLogo } from 'app/components/svgs/ZZLogo';

// import { DILogo } from 'app/components/svgs/DevelopmentInitiatives';
// import { MONLogo } from 'app/components/svgs/MinistryOfNetherlands';

// const Box = styled(props => <MuiBox {...props} />)`
//   && {
//     //background-color: ${Colors.branddark};
//     padding: 32px 54px;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: calc(100% - 108px);
//   }
// `;
//
// const Link = styled(props => <MuiLink {...props} />)`
//   && {
//     font-family: Inter;
//     font-size: 1rem;
//     font-weight: 500;
//     line-height: 1.5;
//     letter-spacing: 0.5px;
//     //color: ${Colors.whiteOrFontlightbase};
//     :hover {
//       cursor: pointer;
//     }
//   }
// `;

export const Footer = () => {
  return (
    <Container>
      <Box bgcolor="#155366" height="200px" width="100%">
        {/*LEFT ITEM*/}
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <IATILogoWhite />
          </Grid>

          {/*MIDDLE ITEM*/}
          <Grid item>
            <Grid container direction="column" justify="space-between">
              <Grid item>
                <Phone style={{ marginLeft: '16px' }} />
                <Typography variant="caption">+31 (0)00 000 00 00</Typography>
              </Grid>

              <Grid item>
                <Mail style={{ marginLeft: '16px' }} />
                <Typography variant="caption">
                  info@@iatistandard.org
                </Typography>
              </Grid>

              <Grid item>
                <Star style={{ marginLeft: '16px' }} />
                <Typography variant="caption">@iati</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/*RIGHT ITEM*/}
          <Grid item>
            <Grid container direction="column" justify="space-between">
              <Grid item alignContent="center" alignItems="center">
                <Typography variant="caption">powered by OIPA from </Typography>
                <ZZLogo />
              </Grid>

              <Grid item>
                <Typography variant="caption">
                  Code licensed under the GNU AGPL. Documentation licensed under
                  CC BY 3.0.{' '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
