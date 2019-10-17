import React from 'react';
import { Grid} from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';

const FilterPlaceholder = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};

export const AdditionalFiltersLayout = () => {
  return (
    <Grid container spacing={4}>
      {/** Data title, activity, or descriptions */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** Transaction Provider Org */}
      <Grid item xs={12} md={6}>
        <Skeletor />
      </Grid>
      {/** Transaction Receiver Org */}
      <Grid item xs={12} md={6}>
        <Skeletor />
      </Grid>

      {/** Participating Organisation */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>

      {/** extra filter container */}
      <Grid item xs={12} md={12}>
        <FilterPlaceholder />
      </Grid>

      {/** todo: implement logic for adding/removing filters */}

      {/** Add filter */}
      <Grid item xs={6} md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};
