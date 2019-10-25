import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocationDescriptor } from 'history';

type Props = {
  size?: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: any;
  anchorref?: ReactNode;
  children?: ReactNode;
  link?: string;
  target?: string;
};

/*type BaseProps = {
  children?: ReactNode;
};*/

const ZimmerButton = styled(props => (
  <Button {...props}>{props.children}</Button>
))`
  && {
    justify-content: center;
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

export const TextButton = (props: Props) => {
  return (
    <ZimmerButton
      size={props.size}
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      anchorref={props.anchorref}
      href={props.link}
      target={props.target}
    >
      {props.label && props.label}
    </ZimmerButton>
  );
};
