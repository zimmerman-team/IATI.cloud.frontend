// @ts-nocheck
import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { css } from 'styled-components/macro';

interface TextButtonParams {
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: any;
  anchorref?: ReactNode;
  children?: ReactNode;
  link?: string;
  target?: string;
}

const TextButtonStyle = css`
  && {
    justify-content: center;
    box-shadow: initial !important;
    width: 100%;
    height: 48px;

    & [class*='MuiButton-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

export const TextButton = (props: TextButtonParams) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={props.disabled}
      onClick={props.onClick}
      anchorref={props.anchorref}
      href={props.link}
      target={props.target}
      css={TextButtonStyle}
    >
      {props.label && props.label}
    </Button>
  );
};
