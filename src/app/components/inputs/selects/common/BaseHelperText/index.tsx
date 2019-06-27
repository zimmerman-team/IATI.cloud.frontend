import React from 'react';
import styled from 'styled-components';
import { Link } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

type Props = {
  helperText?: string;
  helperTextAfter?: string;
  url?: string;
  linkText?: string;
};

const BaseComponent = styled(props => <FormHelperText {...props} />)`
  margin-top: 4px !important;
  & [class*='MuiLink-underlineHover']:hover {
    text-decoration: none;
  }
`;

const BaseHelperText: React.FC<Props> = props => {
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

export default BaseHelperText;
