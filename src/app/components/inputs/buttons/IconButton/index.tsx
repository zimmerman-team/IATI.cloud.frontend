import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
};

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    justify-content: space-between;
    box-shadow: initial !important;
    min-width: 250px;
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

const IconButton: React.FC<Props> = props => {
  return (
    <ZimmerButton
      size={props.size}
      variant="contained"
      color="primary"
      disabled={props.disabled}
    >
      {props.label}
      {props.icon}
    </ZimmerButton>
  );
};

export default IconButton;
