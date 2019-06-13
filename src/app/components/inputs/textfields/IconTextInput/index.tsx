import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import FieldBackdrop from 'app/components/common/FieldBackdrop';

type Props = {
  placeholder?: string;
  prefill?: string;
  ariaLabel?: string;
  label?: string;
  helperText: string;
};

const IconTextInput: React.FC<Props> = props => {
  return (
    <div>
      {props.label && <FieldInputLabel label={props.label} />}
      <FieldBackdrop>
        <InputBase
          placeholder={props.placeholder ? props.placeholder : 'Empty'}
          inputProps={{ 'aria-label': 'Placeholder text' }}
        />
        <SearchIcon />
      </FieldBackdrop>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </div>
  );
};

export default IconTextInput;
