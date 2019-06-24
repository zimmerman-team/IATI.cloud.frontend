import React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';

interface OptionType {
  label?: string;
  value: string;
}

function DropdownIndicator(props: IndicatorProps<OptionType>) {
  // todo: get rid of error
  // @ts-ignore
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDropDown />
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
