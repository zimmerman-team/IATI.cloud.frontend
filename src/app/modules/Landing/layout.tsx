/* base */
import React from 'react';
import styled from 'styled-components';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButtonOutlined from 'app/components/inputs/buttons/IconButtonOutlined';
import AppBar from 'app/components/surfaces/AppBar';
import Background from 'app/components/surfaces/Background';
import { ArticleCard } from 'app/components/surfaces/Cards/ArticleCard';
import { Footer } from 'app/components/surfaces/Footer';
import { Header } from 'app/components/surfaces/Header';
import { width } from '@material-ui/system';
import { PageContainer } from 'app/modules/common/PageContainer';

// const useStyles = makeStyles(theme => ({
//   h3: {
//     marginBottom: '8px',
//   },
//   body2: {
//     marginBottom: '24px',
//   },
//   caption: {
//     opacity: 0.6,
//     position: 'absolute',
//     bottom: '32px',
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontWeight: 600,
//     '&:visited ': {
//       color: '#FFF',
//     },
//     '&:hover': {
//       color: '#FFF',
//     },
//   },
// }));

const TypographyOpacity = styled(props => <Typography {...props} />)`
  opacity: 0.8;
`;

export const LandingMidSection = () => {
  return (
    <>
      <Box bgcolor="white" paddingTop="80px" paddingBottom="80px">
        <Grid container direction="row" spacing={8}>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="About Datastore"
              description="IATI is a global initiative to improve the transparency of development and humanitarian resources and their results for addressing poverty and crises."
              buttonLabel="More"
            />
          </Grid>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="Query Builder"
              description="This tool allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format. You create queries based on finding the organisations, and then be configured filter the published data down to what you need."
              buttonLabel="More"
            />
          </Grid>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="Documentation"
              description="This tool allows you to build common queries to obtain data from the IATI Datastore in CSV, XML and JSON format. You create queries based on finding the organisations, and then be configured filter the published data down to what you need."
              buttonLabel="More"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const LandingLayout = () => {
  return (
    <PageContainer footer>
      {/*HEADER*/}
      <Header>
          <Grid container direction="column">
            <Grid item md={7} lg={7}>
              <Typography variant="h3" color="textSecondary">
                IATI Datastore
              </Typography>
              <Box width="100%" height="24px" />
              <TypographyOpacity variant="h5" color="textSecondary">
                The query builder tool makes it easy build queries to obtain
                data from the IATI Datastore in CSV, XML and JSON format.
              </TypographyOpacity>
              <Box width="100%" height="24px" />
              <TypographyOpacity variant="body2" color="textSecondary">
                The query builder uses OIPA to query the IATI database. An
                open-source libary by Zimmerman & Zimmerman which extracts and
                stores raw IATI XML files from the IATI Registry and makes it
                avalible as API endpoints to build data driven information
                solutions.
              </TypographyOpacity>
            </Grid>

            <Box width="100%" height="36px" />

            <Grid item md={4} lg={4}>
              <IconButtonOutlined label="Query Builder" />
            </Grid>
          </Grid>
      </Header>

      {/*ARTICLES*/}

      <Container maxWidth="lg">
        <LandingMidSection />
      </Container>

      {/*FOOTER*/}
      {/*TODO: replace box with footer component*/}
      {/*<Box width="100%" height="200px" bgcolor="#155366" />*/}
      {/*<Footer />*/}
    </PageContainer>
  );
};
