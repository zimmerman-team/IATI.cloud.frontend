import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { BaseTextFieldProps } from '@material-ui/core/TextField';

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>;

function InputComponent({ inputRef, ...props }: InputComponentProps) {
  return <div ref={inputRef} {...props} />;
}

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} as any;

export default InputComponent;
