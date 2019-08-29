import React from 'react';
import PropTypes from 'prop-types';
import { ValueContainerProps } from 'react-select/src/components/containers';

interface OptionType {
  label: string;
  value: string;
}

function ValueContainer(props: ValueContainerProps<OptionType>) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
} as any;

export default ValueContainer;
