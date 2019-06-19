import React from 'react';
import PropTypes from 'prop-types';
import { OptionProps } from 'react-select/lib/components/Option';
import MenuItem from '@material-ui/core/MenuItem';

interface OptionType {
  label: string;
  value: string;
}

function Option(props: OptionProps<OptionType>) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
        color: 'red'
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
} as any;

export default Option;
