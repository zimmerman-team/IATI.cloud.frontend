import React from 'react';
import { NoticeProps } from 'react-select/src/components/Menu';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

interface OptionType {
  label: string;
  value: string;
}

function NoOptionsMessage(props: NoticeProps<OptionType>) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
} as any;

export default NoOptionsMessage;
