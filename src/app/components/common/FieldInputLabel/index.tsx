import React from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';

type Props = {
  label?: string;
};

const BaseInputLabel = styled(props => <InputLabel {...props} />)`
  && {
    font-size: 12px;
    color: black;
    margin-bottom: 8px;
    font-weight: normal;
  }
`;

const FieldInputLabel = (props: Props) => {
  return <BaseInputLabel {...props}>{props.label}</BaseInputLabel>;
};

export default FieldInputLabel;
