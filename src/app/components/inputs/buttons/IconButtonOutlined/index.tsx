import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
};

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    justify-content: space-between;

    width: 284px;
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
    border: 1px solid #ffffff;
    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

const IconButtonOutlined: React.FC<Props> = props => {
  return (
    <ZimmerButton size={props.size} variant="outlined" color="contrastText">
      {props.label}
      <ArrowForward fontSize="small" />
    </ZimmerButton>
  );
};

export default IconButtonOutlined;
