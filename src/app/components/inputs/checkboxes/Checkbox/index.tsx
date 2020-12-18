// @ts-nocheck
/* external */
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import BaseCheckbox from '@material-ui/core/Checkbox';
import SvgIcon from '@material-ui/core/SvgIcon';

/* project */
import IconCheckboxUnchecked from 'app/assets/icons/IconCheckboxUnchecked';
import theme from 'app/theme';

type Props = {
  id: string;
  size?: string;
  label?: string;
  color?: string;
  value?: any;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

// If you want to customize the icons used for the checked/unchecked state
// import the component you want to use and wrap it with <SvgIcon>

const Unnchecked = (
  <SvgIcon>
    {/* todo: greyBase doesn't seem to exist */}
    <IconCheckboxUnchecked color={theme.palette.grey.greyBase} />
  </SvgIcon>
);

const BaseComponent = styled((props) => (
  <BaseCheckbox
    {...props}
    disableRipple
    icon={Unnchecked}
    // in case you want to customize the checked state use the
    // checkIcon property and pass it a component like {ComponentName}
    // and not like {<ComponentName/>}
    color="primary"
  />
))`
  && {
    & [class*='MuiSvgIcon-root'] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Checkbox = (props: Props) => {
  return <BaseComponent {...props} />;
};
