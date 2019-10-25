import React from 'react';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { NavButtonModel } from './layout';
export const NavigationButton = (props: NavButtonModel) => {
  return (
    <NavLink
      to={props.path}
      activeStyle={{ borderBottom: '4px solid #03dbe4' }}
    >
      <Box
        width="235px"
        height="30px"
        bgcolor="grey"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        fontStyle="normal"
        lineHeight="1.5"
        letterSpacing="0.15px"
        textAlign="center"
        color="black"
      >
        {props.label}
      </Box>
    </NavLink>
  );
};
