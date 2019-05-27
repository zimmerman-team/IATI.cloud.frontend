import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
};

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    padding-left: 42px;
    padding-right: 42px;
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
      font-size: 12px;
      text-transform: capitalize;
    }
  }
`;

const BaseButton: React.FC<Props> = props => {
  return (
    <ZimmerButton size={props.size} variant="contained" color="primary">
      {props.label}
    </ZimmerButton>
  );
};

export default BaseButton;
