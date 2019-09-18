import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import FieldBackdrop from 'app/components/common/FieldBackdrop';
import Box from '@material-ui/core/Box';
import { Spacing } from 'app/theme';
import { InputProps as StandardInputProps } from '@material-ui/core/Input';
type Props = {
  placeholder?: string;
  prefill?: string;
  ariaLabel?: string;
  label?: string;
  helperText: string;
  onChange?: StandardInputProps['onChange'];
  value?: unknown;
};

const IconTextInput = (props: Props) => {
  return (
    <React.Fragment>
      {props.label && <FieldInputLabel label={props.label} />}
      <FieldBackdrop>
        <Box marginLeft={Spacing.inputSideSpacing}>
          <InputBase
            placeholder={props.placeholder ? props.placeholder : 'Empty'}
            inputProps={{ 'aria-label': 'Placeholder text' }}
            value={props.value}
            onChange={props.onChange}
          />
        </Box>

        <Box marginRight={Spacing.inputSideSpacing}>
          <SearchIcon color="action" />
        </Box>
      </FieldBackdrop>
      {props.helperText && (
        /* todo: the way text color is set is a bit hacky, should be refactoredd*/
        <FormHelperText style={{ color: 'black' }}>
          {props.helperText}
        </FormHelperText>
      )}
    </React.Fragment>
  );
};

export default IconTextInput;
