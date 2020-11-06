import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';
import { FieldBackdrop } from 'app/components/common/FieldBackdrop';
import Box from '@material-ui/core/Box';
import { Spacing } from 'app/theme';
import { SearchInputField } from '../SearchInputField';
import { createID } from '../../../../utils/removeSpaces';

type Props = {
  placeholder: string;
  label: string;
  helperText: string;
  onChange: Function;
  value: string;
};

const IconTextInput = (props: Props) => {
  return (
    <>
      <FieldInputLabel for={createID(props.label)} label={props.label} />
      <FieldBackdrop>
        <Box marginLeft={Spacing.inputSideSpacing} width="100%">
          <SearchInputField
            id={createID(props.label)}
            onChange={props.onChange}
            placeholder={props.placeholder}
            valueStr={props.value as string}
          />
        </Box>

        <Box marginRight={Spacing.inputSideSpacing}>
          <SearchIcon color="action" />
        </Box>
      </FieldBackdrop>
      {props.helperText && (
        <FormHelperText
          css={`
            color: #717172 !important;
          `}
        >
          {props.helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default IconTextInput;
