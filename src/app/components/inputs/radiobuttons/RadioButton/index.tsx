import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconChecked from 'app/assets/icons/IconChecked';
import IconUnchecked from 'app/assets/icons/IconUnchecked';
import theme from 'app/theme';
type Props = {
  size?: string;
  label?: string;
};

const Unnchecked = (
  <SvgIcon>
    <IconUnchecked color={theme.palette.primary.dark} />
  </SvgIcon>
);

const Checked = (
  <SvgIcon>
    <IconChecked color={theme.palette.primary.main} />
  </SvgIcon>
);

const BaseComponent = styled(props => (
  <Radio
    {...props}
    disableRipple
    icon={Unnchecked}
    checkedIcon={Checked}
    color="primary"
  />
))`
  && {
    & [class*='MuiIconButton-label'] {
      height: 20px;
      width: 20px;
    }

    & [class*='MuiSvgIcon-root'] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const RadioButton: React.FC<Props> = props => {
  return <BaseComponent {...props} />;
};

export default RadioButton;
