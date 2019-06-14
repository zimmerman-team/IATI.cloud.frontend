import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import FieldBackdrop from 'app/components/common/FieldBackdrop';
import Box from '@material-ui/core/Box';
import { Spacing } from 'app/theme/index';
type Props = {
  placeholder?: string;
  prefill?: string;
  ariaLabel?: string;
  label?: string;
  helperText: string;
};

const IconTextInput: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {props.label && <FieldInputLabel label={props.label} />}
      <FieldBackdrop>
        <Box marginLeft={Spacing.inputSideSpacing}>
          <InputBase
            placeholder={props.placeholder ? props.placeholder : 'Empty'}
            inputProps={{ 'aria-label': 'Placeholder text' }}
          />
        </Box>

        <Box marginRight={Spacing.inputSideSpacing}>
          <SearchIcon color="action" />
        </Box>
      </FieldBackdrop>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </React.Fragment>
  );
};

export default IconTextInput;
