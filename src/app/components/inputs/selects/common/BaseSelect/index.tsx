import React, { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import { Spacing } from 'app/theme';
import { BaseInput } from 'app/components/inputs/selects/common/BaseInput';
import { InputProps } from '@material-ui/core';

type SelectProps = {
  id?: string;
  inputProps: InputProps;
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
      //body1/subtitle1
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: 0.5px;
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

export const BaseSelect = (props: SelectProps) => {
  return <BaseComponent {...props} />;
};
