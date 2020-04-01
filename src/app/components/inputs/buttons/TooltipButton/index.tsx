import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';

type Props = {
  size?: string;
  label?: string;
  tip?: string | React.ReactNode;
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

// todo: Get rid of warning https://github.com/atomiks/tippy.js-react/issues/49
export const TooltipButton = (props: Props) => {
  return (
    <Tooltip
      title={props.tip ? props.tip : 'empty tooltip'}
      placement="top-end"
    >
      <ZimmerButton
        {...props}
        size={props.size}
        variant="contained"
        color="primary"
      >
        i
      </ZimmerButton>
    </Tooltip>
  );
};
