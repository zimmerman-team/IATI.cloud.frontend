import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';

const FilterPlaceholder = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <Skeletor />
      </Grid>
      <Grid item md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};

export const AdditionalFiltersLayout = () => {
  return (
    <Grid container spacing={4}>
      {/** Data title, activity, or descriptions */}
      <Grid item md={12}>
        <Skeletor />
      </Grid>
      {/** Transaction Provider Org */}
      <Grid item md={6}>
        <Skeletor />
      </Grid>
      {/** Transaction Receiver Org */}
      <Grid item md={6}>
        <Skeletor />
      </Grid>

      {/** Participating Organisation */}
      <Grid item md={12}>
        <Skeletor />
      </Grid>

      {/** extra filter container */}
      <Grid item md={12}>
        <FilterPlaceholder />
      </Grid>

      {/** todo: implement logic for adding/removing filters */}

      {/** Add filter */}
      <Grid item md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};
