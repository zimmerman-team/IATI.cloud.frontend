import React from "react";
import { Grid } from "@material-ui/core";
import { RequestNavigatorModel } from "app/modules/Documentation/common/DocCallPreview/common/RequestNavigator/model";
import { NavLink } from "react-router-dom";

type NavButtonModel = {
  label: string;
  path?: string;
  active?: boolean;
};
const NavButton = (props: NavButtonModel) => {
  return (
    <NavLink
      to="/documentation"
      css={`
        height: 55px;
        font-family: Inter, serif;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: 0.15px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-bottom: 2px solid transparent;

        &:hover {
          border-bottom-color: white;
        }
      `}
    >
      {props.label}
    </NavLink>
  );
};

export const RequestNavigator = (props: RequestNavigatorModel) => {
  return (
    <Grid
      container
      spacing={0}
      css={`
        position: sticky;
        top: 0;
        background-color: #5b6673;
      `}
    >
      <Grid item md={4}>
        <NavButton label="Node" path="/" />
      </Grid>
      <Grid item md={4}>
        <NavButton label="Ruby" path="/" />
      </Grid>
      <Grid item md={4}>
        <NavButton label="Python" path="/" />
      </Grid>
    </Grid>
  );
};
