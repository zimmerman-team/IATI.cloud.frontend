import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
};

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    box-shadow: initial !important;
    //padding-left: 42px;
    //padding-right: 42px;
    width: 100px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
/*    background-color: ${props => {
  switch (props.copied) {
    case true:
      return 'red';
    case false:
      return 'blue';
    default:
      return 'yellow';
  }
}};*/

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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
