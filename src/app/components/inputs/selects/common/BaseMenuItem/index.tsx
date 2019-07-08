import React, { ReactNode } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';

type MenuItemProps = {
  children?: ReactNode;
  value?: number | string;
};
const BaseComponent = styled(props => <MenuItem {...props} />)``;

const BaseMenuItem = (props: MenuItemProps) => {
  return (
    <BaseComponent {...props}>
      <Typography variant="body2">{props.children}</Typography>
    </BaseComponent>
  );
};

export default BaseMenuItem;
