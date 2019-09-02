import React from 'react';
import PropTypes from 'prop-types';
import { SingleValueProps } from 'react-select/src/components/SingleValue';
import Typography from '@material-ui/core/Typography';

interface OptionType {
  label: string;
  value: string;
}

function SingleValue(props: SingleValueProps<OptionType>) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
} as any;

export default SingleValue;
