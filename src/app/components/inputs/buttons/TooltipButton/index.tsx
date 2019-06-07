import React, { createRef, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type Props = {
  size?: string;
  label?: string;
};

const ZimmerButton = styled(props => <Button {...props} />)`
  && {
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: initial;
    min-height: initial;
    box-shadow: initial;
    & [class*='MuiButton-label'] {
      font-size: 9px;
      text-transform: initial;
      line-height: 1;
    }
  }
`;

const TooltipButton: React.FC<Props> = props => {
  return (
    <ZimmerButton size={props.size} variant="contained" color="primary">
      {props.children}
    </ZimmerButton>
  );
};

export default TooltipButton;
