import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';

export const OrganisationFragmentLayout = () => {
  return (
    <Grid container spacing={4}>
      {/** reporting organisation*/}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** type of organisation */}
      <Grid item xs={12} md={8}>
        <Skeletor />
      </Grid>
      {/** secondary publisher */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** sector */}
      <Grid item xs={12} md={6}>
        <Skeletor />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={6}>
        <Skeletor />
      </Grid>
      {/** recipient country */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** recipient region */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** must have activity period */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** activity period start date */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** activity period end date */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};
