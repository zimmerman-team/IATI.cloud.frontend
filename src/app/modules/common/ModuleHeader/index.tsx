import React from 'react';
import { Box, Grid, Typography, useTheme } from '@material-ui/core';
import { Header } from 'app/components/surfaces/Header';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import styled from 'styled-components';

type ModuleModel = {
  title?: string;
  description?: string;
  extraText?: boolean;
};

const Link = styled.a`
  color: #03DBE4;
`;

export const ModuleHeader = (props: ModuleModel) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Header>
      <Grid container item xs={12} lg={6}>
        {props.title && (
          <Typography variant={md ? 'h6' : 'h4'} color="textSecondary">
            {props.title}
          </Typography>
        )}
        {props.description && (
          <>
            <Box height="27px" width="100%" />
            <Typography variant="body2" color="textSecondary">
              {props.description}{' '}
              {props.extraText && (
                <>
                  For guidance on how
                  <br /> to use the query builder, see the{' '}
                  <Link
                    href="https://docs.google.com/document/d/1KTQfZ6hnljCZk0EnjzMgqGhRCdPKrgLJBrev6v1QA6s/edit"
                    target="_blank"
                  >
                    Query Builder User Guide.
                  </Link>
                </>
              )}
            </Typography>
          </>
        )}
      </Grid>
    </Header>
  );
};
