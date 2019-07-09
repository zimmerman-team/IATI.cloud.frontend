import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: any;
  anchorref?: ReactNode;
  children?: ReactNode;
};

/*type BaseProps = {
  children?: ReactNode;
};*/

const ZimmerButton = styled(props => (
  <Button {...props}>{props.children}</Button>
))`
  && {
    justify-content: space-between;
    box-shadow: initial !important;
    width: 100%;
    height: ${props => {
      switch (props.size) {
        case 'small':
          return '30px';
        case 'large':
          return '56px';
        default:
          return '48px';
      }
    }};

    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

const IconButton = (props: Props) => {
  return (
    <ZimmerButton
      size={props.size}
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      anchorref={props.anchorref}
    >
      {props.label && props.label}
      {props.icon && props.icon}
    </ZimmerButton>
  );
};

export default IconButton;
