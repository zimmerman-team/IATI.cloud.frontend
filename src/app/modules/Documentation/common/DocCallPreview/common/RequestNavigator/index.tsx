import React, { ReactNode } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Skeletor } from 'app/components/utils/Skeletor';
import { RequestNavigatorModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestNavigator/model';

type NavButtonModel = {
  label: string;
  path?: string;
  active?: boolean;
};
const NavButton = (props: NavButtonModel) => {
  return (
    <Box
      height={'55px'}
      css={`
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
        border-bottom: 2px solid;
      `}
    >
      {props.label}
    </Box>
  );
};

export const RequestNavigator = (props: RequestNavigatorModel) => {
  return (
    <Grid container spacing={0}>
      <Grid item md={4}>
        <NavButton label={'Node'} />
      </Grid>
      <Grid item md={4}>
        <NavButton label={'Ruby'} />
      </Grid>
      <Grid item md={4}>
        <NavButton label={'Python'} />
      </Grid>
    </Grid>
  );
};
