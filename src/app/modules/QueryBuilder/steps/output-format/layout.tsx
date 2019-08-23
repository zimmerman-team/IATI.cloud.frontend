import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';

const RadioButtonPlaceholder = () => {
  return (
    <>
      <Grid item>
        <Skeletor hideLabel type="circle" width="20px" height="20px" />
      </Grid>
      <Grid item md={3}>
        <Skeletor type="rect" width="100%" height="20px" />
      </Grid>
    </>
  );
};

export const OutputFormatLayout = () => {
  return (
    <Grid container spacing={4}>
      {/** Column elements to include */}
      <Grid item md={12}>
        <Skeletor />
      </Grid>

      {/** Row format */}
      <Grid item md={12}>
        <Grid container spacing={2}>
          <RadioButtonPlaceholder />
          <RadioButtonPlaceholder />
          <RadioButtonPlaceholder />
        </Grid>
      </Grid>

      {/** Collapse repeating elements */}
      <Grid item md={12}>
        <Grid container spacing={2}>
          <RadioButtonPlaceholder />
          <RadioButtonPlaceholder />
          <RadioButtonPlaceholder />
        </Grid>
      </Grid>
    </Grid>
  );
};
