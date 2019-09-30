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
  color: yellow;
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
              description="The Datastore uses OIPA, an open-source tool created by Zimmerman & Zimmerman. OIPA extracts and stores raw IATI XML files from the IATI Registry and makes it available as API endpoints to build data driven information solutions."
              buttonLabel="More"
              path="/about"
              target="_self"
            />
          </Grid>
          <Grid item md={4}>
            <ArticleCard
              loaded
              title="Query Builder"
              description="Use the Query Builder to easily search IATI data based on selected filters and have it returned in spreadsheet (CSV or XLS), JSON and XML formats."
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
              path="/docimentation/introduction"
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
              The IATI Datastore provides data on development and humanitarian
              spending and projects that address poverty and crises across the
              world.
            </TypographyOpacity>
            <Box width="100%" height="24px" />
            <TypographyOpacity variant="body2" color="textSecondary">
              Find data published by organisations from governments, development
              finance institutions and UN agencies to NGOs, foundations and the
              private sector. They have published data according to the IATI
              Standard, our set of rules and guidance for sharing useful, open
              data. JSON format.
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
