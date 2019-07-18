/* base */
import React from 'react';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTitle from 'react-use/lib/useTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import IconButtonOutlined from 'app/components/inputs/buttons/IconButtonOutlined';
import Background from 'app/components/surfaces/Background';

const useStyles = makeStyles(theme => ({
  h3: {
    marginBottom: '8px',
  },
  body2: {
    marginBottom: '24px',
  },
  caption: {
    opacity: 0.6,
    position: 'absolute',
    bottom: '32px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    '&:visited ': {
      color: '#FFF',
    },
    '&:hover': {
      color: '#FFF',
    },
  },
}));

const TypoMod = styled(props => <Typography {...props} />)`
  color: white;
`;

export const LandingLayout = () => {
  const classes = useStyles();

  return (
    <Background>
      <Container maxWidth="lg">
        <Box paddingTop="100px">
          <Grid container spacing={4} direction="column">
            <Grid item xs={12} sm={12} md={6}>
              <Box marginBottom="32px">
                <TypoMod variant="h3" className={classes.h3}>
                  IATI Datastore
                </TypoMod>
                <TypoMod variant="h5">
                  The query builder tool makes it easy build queries to obtain
                  data from the IATI Datastore in CSV, XML and JSON format.
                </TypoMod>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TypoMod variant="body2" className={classes.body2}>
                The query builder uses{' '}
                <Link
                  href="https://www.oipa.nl"
                  color="textSecondary"
                  className={classes.link}
                >
                  OIPA
                </Link>{' '}
                to query the IATI database. An open-source library by{' '}
                <Link
                  href="https://www.zimmermanzimmerman.nl"
                  color="textSecondary"
                  className={classes.link}
                >
                  Zimmerman & Zimmerman
                </Link>{' '}
                which extracts and stores raw IATI XML files from the IATI
                Registry and makes it available as API endpoints to build data
                driven information solutions.
              </TypoMod>
            </Grid>

            <Grid item xs={12}>
              <IconButtonOutlined label="Query Builder" />
            </Grid>
          </Grid>

          <TypoMod variant="caption" className={classes.caption}>
            Code licensed under the GNU AGPL. Documentation licensed under CC BY
            3.0.
          </TypoMod>
        </Box>
      </Container>
    </Background>
  );
};
