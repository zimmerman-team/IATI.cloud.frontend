import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';
import highlight from 'remark-highlight.js';

export const CategoryHeader = ({ category }) => {
  return (
    <>
      <Grid container spacing={2} id={category.name}>
        <Grid item md={12}>
          <Typography variant="h3">{category.name}</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="body2">
            <Markdown className="markdown" remarkPlugins={[gfm, highlight]}>
              {category.description ?? category.description}
            </Markdown>
          </Typography>
        </Grid>
      </Grid>
      <Box height="40px" />
    </>
  );
};
