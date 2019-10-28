/* base */
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { IconButtonOutlined } from 'app/components/inputs/buttons/IconButtonOutlined';
import { Header } from 'app/components/surfaces/Header';
import { PageContainer } from 'app/modules/common/PageContainer';
import { LandingMidSection } from 'app/modules/Landing/common/LandingMidSection';

const TypographyOpacity = styled(props => <Typography {...props} />)`
  opacity: 0.8;
`;

export const LandingLayout = () => {
  return (
    <>
      <PageContainer footer>
        {/*HEADER*/}

        <Header>
          <Grid container direction="column">
            <Grid item md={12} lg={7}>
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
                Find data published by organisations from governments,
                development finance institutions and UN agencies to NGOs,
                foundations and the private sector. They have published data
                according to the IATI Standard, our set of rules and guidance
                for sharing useful, open data.
              </TypographyOpacity>
              <Box width="100%" height="24px" />
              <TypographyOpacity variant="body2" color="textSecondary">
                Access data through using the Datastore’s API or Query Builder.
              </TypographyOpacity>
            </Grid>

            <Box width="100%" height="36px" />

            <Grid item sm={12} md={4} lg={4}>
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
    </>
  );
};
