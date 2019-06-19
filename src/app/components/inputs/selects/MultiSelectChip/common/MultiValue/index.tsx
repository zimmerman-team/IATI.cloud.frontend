import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { MultiValueProps } from 'react-select/lib/components/MultiValue';
// import Chip from '@material-ui/core/Chip';
import Chip from 'app/components/datadisplay/Chip';
import clsx from 'clsx';
import CancelIcon from '@material-ui/icons/Cancel';

interface OptionType {
  label: string;
  value: string;
}

function MultiValue(props: MultiValueProps<OptionType>) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children ? 'ja' : 'joe'}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
      {...props}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
} as any;

export default MultiValue;
