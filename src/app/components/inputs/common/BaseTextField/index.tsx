import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

type Props = {
  value?: string;
};

const BaseComponent = styled(props => <TextField {...props} />)`
  width: 100%;

  & [class*='MuiInput-underline']:before,
  & [class*='MuiInput-underline']:after {
    display: none;
  }

  & [class*='MuiInputBase-input'] {
    padding: 0;
  }
  & [class*='MuiInputBase-root'] {
    background-color: #f0f3f7;
    margin: 0;
    border: initial;
    padding: 0;
    font-size: 16px;
    font-weight: 300;
    margin-left: 15px;
  }
  & [class*='MuiFormLabel-root'] {
    display: none;
  }
`;

export const BaseTextField = (props: Props) => {
  return <BaseComponent value={props.value} {...props} />;
};
