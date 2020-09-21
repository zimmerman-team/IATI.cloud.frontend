import React from 'react';
import { Box, Container } from '@material-ui/core';
import { PageContainer } from 'app/modules/common/PageContainer';
import { ModuleHeader } from 'app/modules/common/ModuleHeader';
import Grid from '@material-ui/core/Grid';
import ErrorImage from 'app/assets/images/404_image.png';
import { Link } from 'app/modules/about-module/layout';

export const PageNotFoundLayout = () => {
  return (
    <PageContainer footer>
      <ModuleHeader />
      <Box width="100%" height="40px" />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Appbar component needs a refactor, therefore not in this PR.*/}

          {/* What can I do with the IATI Datastore? */}
          <Grid item lg={12}>
            <div
              css={`
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 34px;
                line-height: 41px;
                text-align: center;
                letter-spacing: 0.250795px;
              `}
            >
              Whoops...
            </div>
            <div
              css={`
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
                letter-spacing: 0.250795px;
              `}
            >
              Looks like something went wrong
            </div>
          </Grid>

          {/* What can I do with the IATI Datastore? */}
          <Grid
            item
            lg={12}
            css={`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <img src={ErrorImage} alt="error image" />
          </Grid>

          {/* What can I do with the IATI Datastore? */}
          <Grid
            item
            lg={12}
            css={`
              margin-bottom: 100px;
            `}
          >
            <div
              css={`
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                letter-spacing: 0.250795px;
              `}
            >
              An error ocurred and your request couldn’t be completed.
              <br /> Either check the URL,{' '}
              <Link
                href="/"
              >
                home page
              </Link>
              , or feel free to{' '}
              <Link
                href="/"
              >
                report this issue.
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Box height={'50px'} />
    </PageContainer>
  );
};
