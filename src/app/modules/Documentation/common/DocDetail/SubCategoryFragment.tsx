import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { SubCategoryHeader } from './SubCategoryHeader';
import { SubCaregoryDescription } from './SubCaregoryDescription';
import { CallFragment } from './CallFragment';
export const SubCategoryFragment = ({ item }) => (
  <Grid container spacing={2} id={item.name} key={item.name}>
    {item._postman_isSubFolder && <SubCategoryHeader item={item} />}

    <Box height="20px" />

    {item.description && <SubCaregoryDescription item={item} />}

    <Box height="20px" />

    <CallFragment item={item} />
  </Grid>
);
