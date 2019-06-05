import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconChecked from 'app/assets/icons/IconChecked';
import IconUnchecked from 'app/assets/icons/IconUnchecked';
import theme from 'app/theme';
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
