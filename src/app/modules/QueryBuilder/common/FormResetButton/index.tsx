import RotateRightIcon from "@material-ui/icons/RotateRight";
import { Grid } from "@material-ui/core";
import React from "react";

interface FormResetButtonProps {
  handleClick?: any;
}

export const FormResetButton = (props: FormResetButtonProps) => (
  <Grid
    item
    xs={4}
    md={2}
    css={`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 132px;
      height: 48px;
      background-color: #f0f3f7;
      cursor: pointer;
      user-select: none;
      margin-right: 20px !important;
    `}
    onClick={() => window.location.reload(false)}
  >
    <span
      css={`
        color: #165163;
        margin-right: 10px;
      `}
    >
      Reset
    </span>
    <RotateRightIcon
      css={`
        color: #165163;
      `}
    />
  </Grid>
);
