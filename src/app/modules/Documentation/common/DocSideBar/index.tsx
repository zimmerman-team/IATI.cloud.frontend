import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';
import { NavLink } from 'react-router-dom';


type  SideBarItemModel = {
label:string;
path:string;
}

const SideBarItem = () => {
  return (
    <Grid item md={12}>
      <NavLink exact to="/documentation">
        <Skeletor width="100%" height="25px" />
      </NavLink>
    </Grid>
  );
};

export const DocsideBar = () => {
  return (

    <Grid container spacing={4} direction={'column'}>

      {/* api search field */}
      <Grid item md={12}>
        <Skeletor />
      </Grid>

      {/* api item header */}
      <Grid item md={12}>
        <Typography variant="h6">H6 header</Typography>
      </Grid>

      {/* api sub  items*/}
      <SideBarItem />
      <SideBarItem />
      <SideBarItem />
      <SideBarItem />
    </Grid>
  );
};
