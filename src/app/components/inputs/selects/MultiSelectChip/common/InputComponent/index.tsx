import React, { HTMLAttributes } from 'react';
import PropTypes, { string } from 'prop-types';

import { BaseTextFieldProps } from '@material-ui/core/TextField';

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>;

function InputComponent({ inputRef, ...props }: InputComponentProps) {
  return <div ref={inputRef} disabled="true" {...props} />;
}

InputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  variant: PropTypes.string
} as any;

export default InputComponent;
