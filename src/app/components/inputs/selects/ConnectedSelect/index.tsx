/** core */
import React from 'react';
/** third-party */
import Select from 'react-select';
import FieldInputLabel from 'app/components/common/FieldInputLabel';

import {
  ClearIndicator,
  Control,
  DropdownIndicator,
  IndicatorSeparator,
  Menu,
  MenuList,
  MultiValue,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  ValueContainer,
} from './common';

const customStyles = {
  option: (provided: any, state: any) => Option(provided, state),
  control: Control,
  menuList: (provided: any, state: any) => MenuList(provided, state),
  valueContainer: (provided: any) => ValueContainer(provided),
  multiValue: (provided: any) => MultiValue(provided),
  multiValueLabel: MultiValueLabel,
  multiValueRemove: (provided: any) => ({ ...provided }),
  menu: Menu,
};

export const ConnectedSelect = (props: any) => {
  return (
    <>
      <FieldInputLabel label={props.label} />
      <Select
        components={{
          MultiValueRemove,
          IndicatorSeparator,
          ClearIndicator,
          DropdownIndicator,
        }}
        styles={customStyles}
        isMulti
        {...props}
      />
    </>
  );
};
