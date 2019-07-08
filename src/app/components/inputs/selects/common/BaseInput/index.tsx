import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

const BaseComponent = styled(props => <InputBase {...props} />)`
  && {
    border-radius: 2px;
    height: 48px;
  }
`;

const BaseInput = props => {
  return <BaseComponent {...props} />;
};

export default BaseInput;
