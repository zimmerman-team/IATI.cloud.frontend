/* base */
import React, { Suspense } from 'react';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTitle from 'react-use/lib/useTitle';

/* componenents */
const IconButtonOutlined = React.lazy(() =>
  import('app/components/inputs/buttons/IconButtonOutlined')
);
const Background = React.lazy(() =>
  import('app/components/surfaces/Background')
);
import Progress from 'app/components/feedback/Progress';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  h3: {
    marginBottom: '8px'
  },
  body2: {
    marginBottom: '24px'
  },
  caption: {
    opacity: 0.6,
    position: 'absolute',
    bottom: '32px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    '&:visited ': {
      color: '#FFF'
    },
    '&:hover': {
      color: '#FFF'
    }
  }
}));

const ComponentBase = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 48px;
  margin-right: 48px;
  height: 100%;
`;

const Box = styled.div`
  width: 485px;
`;

const Section = styled.section`
  margin-bottom: 32px;
`;

const TypoMod = styled(props => <Typography {...props} />)`
  color: white;
`;
const MockData = {
  moduleName: 'Landing'
};

const Landing: React.FunctionComponent = () => {
  useTitle('OIPA');
  const classes = useStyles();
  return (
    <React.Fragment>
      <Suspense fallback={<Progress />}>
        <Background>
          <ComponentBase>
            <Container maxWidth="lg">
              <Box>
                <Section>
                  <TypoMod variant="h3" className={classes.h3}>
                    IATI Datastore
                  </TypoMod>
                  <TypoMod variant="h6">
                    The query builder tool makes it easy build queries to obtain
                    data from the IATI Datastore in CSV, XML and JSON format.{' '}
                  </TypoMod>
                </Section>

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
                <IconButtonOutlined label="Query Builder" />
              </Box>

              <TypoMod variant="caption" className={classes.caption}>
                Code licensed under the GNU AGPL. Documentation licensed under
                CC BY 3.0.
              </TypoMod>
            </Container>
          </ComponentBase>
        </Background>
      </Suspense>
    </React.Fragment>
  );
};

export default Landing;
