import React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';

interface OptionType {
  label?: string;
  value: string;
}

const DropdownIndicator: React.FC<OptionType> = props => {
  return (
    <React.Fragment {...props}>
      <ArrowDropDown />
    </React.Fragment>
  );
};

export default DropdownIndicator;
