import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

type Props = {
  label?: string;
};

const BaseComponent = styled(props => <Radio {...props} />)`
  && {
    & [class*='MuiIconButton-label'] {
    }
  }
`;

const RadioButton: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default RadioButton;
