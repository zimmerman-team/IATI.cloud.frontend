import React from 'react';
import PropTypes from 'prop-types';
import { OptionProps } from 'react-select/lib/components/Option';
import MenuItem from '@material-ui/core/MenuItem';

interface OptionType {
  label: string;
  value: string;
}
//todo: refactor styling
function Option(props: OptionProps<OptionType>) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontFamily: 'Inter',
        fontSize: '14px',
        letterSpacing: '0.3px',
        lineHeight: '1.71',
        fontWeight: 400,
        height: '48px'
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
