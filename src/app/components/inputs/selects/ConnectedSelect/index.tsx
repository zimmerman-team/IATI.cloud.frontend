/** core */
import React from 'react';
/** third-party */
import Select from 'react-select';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';

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
  HelperBlock,
  Option,
  ValueContainer,
} from './common';
import { createID } from '../../../../utils/removeSpaces';

const customStyles = {
  option: (provided: any, state: any) => Option(provided, state),
  control: Control,
  menuList: (provided: any, state: any) => MenuList(provided, state),
  valueContainer: (provided: any) => ValueContainer(provided),
  multiValue: (provided: any) => MultiValue(provided),
  multiValueLabel: MultiValueLabel,
  multiValueRemove: (provided: any) => ({ ...provided }),
  menu: Menu,
  placeholder: (styles) => ({ ...styles, color: 'black', opacity: '1' }),
};

export const ConnectedSelect = (props: any) => {
  return (
    <div
      css={`
        opacity: ${props.disabled ? 0.5 : 1};
        user-select: ${props.disabled ? 'none' : 'initial'};
        pointer-events: ${props.disabled ? 'none' : 'auto'};
      `}
      data-cy={props.data_cy}
    >
      <FieldInputLabel
        for={createID(props.label)}
        label={props.label}
        data-cy={'select-field-label'}
      />
      <Select
        inputId={createID(props.label)}
        data-cy={'select'}
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
      <HelperBlock data-cy={'select-field-help'}>
        {props.helperText && (
          <FieldInputLabel
            for=""
            label={props.helperText}
            css="color: #717172 !important; font-weight: 300 !important;"
          />
        )}
        {props.helperTextLink && props.helperTextUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.helperTextUrl}
          >
            {props.helperTextLink}
          </a>
        )}
      </HelperBlock>
    </div>
  );
};
