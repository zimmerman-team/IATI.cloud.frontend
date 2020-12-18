// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconChecked from 'app/assets/icons/IconChecked';
import IconUnchecked from 'app/assets/icons/IconUnchecked';
import theme from 'app/theme';
type Props = {
  id: string;
  size?: string;
  label?: string;
};

const Unnchecked = (
  <SvgIcon>
    {/* todo: greyBase doesn't seem to exist' */}
    <IconUnchecked color={theme.palette.grey.greyBase} />
  </SvgIcon>
);

const Checked = (
  <SvgIcon>
    <IconChecked color={theme.palette.primary.main} />
  </SvgIcon>
);

const BaseComponent = styled((props) => (
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

export const RadioButton = (props: Props) => {
  return <BaseComponent {...props} />;
};
