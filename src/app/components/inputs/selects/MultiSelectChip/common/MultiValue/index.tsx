import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MultiValueProps } from 'react-select/src/components/MultiValue';
import { Chip } from 'app/components/datadisplay/Chip';
import { IconChipDelete } from 'app/assets/icons/IconChipDelete';

interface OptionType {
  label?: string;
  value: string;
}

function MultiValue(props: MultiValueProps<OptionType>) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<IconChipDelete {...props.removeProps} />}
      {...props}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
} as any;

export default MultiValue;
