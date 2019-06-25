import React, { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import { Spacing } from 'app/theme/index';
import BaseInput from 'app/components/inputs/selects/common/BaseInput';

type SelectProps = {
  children?: ReactNode;
  value?: string | number | string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  MenuProps?: object;
  multiple?: boolean;
};

const BaseComponent = styled(props => (
  <Select {...props} input={<BaseInput {...props} />} />
))`
  && {
    background-color: #f0f3f7;
    margin: 0;
    width: 100%;

    & [class*='MuiSelect-select'] {
      padding-left: ${Spacing.inputSideSpacing};
      &:focus {
        background-color: #f0f3f7 !important;
      }
    }

    & [class*='MuiSelect-icon'] {
      margin-right: 8px;
      fill: #828894;
    }
  }
`;

const BaseSelect: React.FC<SelectProps> = props => {
  return <BaseComponent {...props} />;
};

export default BaseSelect;
