import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';
import highlight from 'remark-highlight.js';

export const SubCaregoryDescription = ({ item }) => {
  return (
    <Grid item md={12}>
      <Typography variant="body2">
        <Markdown className="markdown" remarkPlugins={[gfm, highlight]}>
          {item.description ?? item.description}
        </Markdown>
      </Typography>
      <Box height="20px" width="20px" />
    </Grid>
  );
};
