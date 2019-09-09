import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';
import { NavLink } from 'react-router-dom';

const SideBarItem = () => {
  return (
    <NavLink exact to="/documentation">
      <Grid item md={12}>
        <Skeletor width="100%" height="25px" />
      </Grid>
    </NavLink>
  );
};

export const DocsideBar = () => {
  return (
    // @ts-ignore

    <Grid container spacing={4} direction={'column'}>
      <Grid item>
        <Typography variant="h6">H6 header</Typography>
      </Grid>
      <Grid item md={12}>
        <Grid container direction="column">
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
          <SideBarItem />
        </Grid>
      </Grid>
    </Grid>
  );
};
