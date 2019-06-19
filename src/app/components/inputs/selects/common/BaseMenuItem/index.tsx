import React, { ReactNode } from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';

type MenuItemProps = {
  children?: ReactNode;
  value?: number | string;
};
const BaseComponent = styled(props => <MenuItem {...props} />)`
  && {
    height: 48px;

    &:hover {
      background-color: #e2e6eb;
    }
  }
`;

const BaseMenuItem: React.FC<MenuItemProps> = props => {
  return <BaseComponent {...props}>{props.children}</BaseComponent>;
};

export default BaseMenuItem;
