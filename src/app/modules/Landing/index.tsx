/* base */
import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

/* icons */
import Typography from '@material-ui/core/Typography';
import IconButtonOutlined from '../../components/inputs/buttons/IconButtonOutlined';
import Background from '../../components/surfaces/Background';
import Container from '@material-ui/core/Container';

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

const Landing: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Background>
        <ComponentBase>
          <Container maxWidth="lg">
            <Box>
              <Section>
                <Typography
                  variant="h3"
                  color="textPrimary"
                  className={classes.h3}
                >
                  IATI Datastore
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  The query builder tool makes it easy build queries to obtain
                  data from the IATI Datastore in CSV, XML and JSON format.{' '}
                </Typography>
              </Section>

              <Typography
                variant="body2"
                color="textPrimary"
                className={classes.body2}
              >
                The query builder uses <b>OIPA</b> to query the IATI database.
                An open-source libary by <b>Zimmerman & Zimmerman</b> which
                extracts and stores raw IATI XML files from the IATI Registry
                and makes it avalible as API endpoints to build data driven
                information solutions.
              </Typography>
              <IconButtonOutlined label="Query Builder" />
            </Box>

            <Typography
              variant="caption"
              color="textPrimary"
              className={classes.caption}
            >
              Code licensed under the GNU AGPL. Documentation licensed under CC
              BY 3.0.
            </Typography>
          </Container>
        </ComponentBase>
      </Background>
    </React.Fragment>
  );
};

export default Landing;
