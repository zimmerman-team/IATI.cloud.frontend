import React from 'react';
import PropTypes from 'prop-types';
import { OptionProps } from 'react-select/src/components/Option';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

interface OptionType {
  label: string;
  value: string;
}

//todo: refactor styling => also had to do !important in external .css file
const Component = styled(props => <MenuItem {...props} />)`
  font-family: Inter !important;
  font-size: 14px !important;
  letterspacing: 0.3px !important;
  lineheight: 1.71 !important;
  fontweight: 400 !important;
  height: 48px !important;
`;

function Option(props: OptionProps<OptionType>) {
  return (
    <Component
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      {...props.innerProps}
    >
      {props.children}
    </Component>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
} as any;

export default Option;
