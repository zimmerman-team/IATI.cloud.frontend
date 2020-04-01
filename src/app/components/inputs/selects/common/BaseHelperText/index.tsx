import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

type Props = {
  helperText?: string;
  helperTextAfter?: string;
  url?: string;
  linkText?: string;
  children?: ReactNode;
};

const BaseComponent = styled(props => <FormHelperText {...props} />)`
  margin-top: 4px !important;
  & [class*='MuiLink-underlineHover']:hover {
    text-decoration: none;
  }
`;

export const BaseHelperText = (props: Props) => {
  return (
    <BaseComponent>
      {props.helperText}
      <Link href={props.url}>
        {/*props.children is a required attribute for the Link component*/}
        {props.children}
        {props.linkText}
      </Link>
      {props.helperTextAfter}
    </BaseComponent>
  );
};
