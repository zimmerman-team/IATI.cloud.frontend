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

export const RadioButton = (props: Props) => {
  return <BaseComponent {...props} />;
};
