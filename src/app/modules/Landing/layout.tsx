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
import Link from '@material-ui/core/Link';

const TypographyOpacity = styled(props => <Typography {...props} />)`
  opacity: 0.8;
`;

const TextLink = styled.a`
text-decoration: none;
color:yellow;
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
              path="/about"
              target="_self"
            />
          </Grid>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="Query Builder"
              description="This tool allows you to build custom queries to extract data from the IATI Datastore in JSON, XML, CSV and XLS format. You build queries based on finding organisations and then be configured filter the published data down to what you need."
              buttonLabel="More"
              path="/querybuilder/core-filters"
              target="_self"
            />
          </Grid>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="API Documentation"
              description="For guidance on how to form API queries and the available endpoints and filters please see the OIPA’s technical documentation."
              buttonLabel="More"
              path="https://docs.oipa.nl"
              target="_blank"
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
              The IATI Datastore enables you to output data in four different
              formats (JSON, XML, CSV and XLS) for various purposes.
            </TypographyOpacity>
            <Box width="100%" height="24px" />
            <TypographyOpacity variant="body2" color="textSecondary">
              The IATI Datastore holds all activity data published on
              development and humanitarian activities available on the{' '}
              <Link href="https://iatiregistry.org/" variant="body2" style={{color: 'white', textDecoration: 'underline'}}>
                IATI Registry
              </Link>
              . The Datastore is primarily aimed at users who have technical
              expertise in manipulating data. It lets you query the content of
              all the original IATI XML files in a single place. In addition to
              XML, the IATI data can be downloaded in a spreadsheet (CSV) or
              JSON format.
            </TypographyOpacity>
            <Box width="100%" height="24px" />
            <TypographyOpacity variant="body2" color="textSecondary">
              Access data through using the Datastore’s API or Query Builder.
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
