import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  label?: string;
  value?: string;
  control: JSX.Element;
};

const BaseComponent = styled(props => <FormControlLabel {...props} />)`
  && {
    & [class*='MuiFormControlLabel-label'] {
      font-size: 14px;
      text-transform: capitalize;
    }
  }
`;

const FormItemLabel: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default FormItemLabel;
