import React from "react";
import styled from "styled-components/macro";
import SearchIcon from "@material-ui/icons/Search";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FieldInputLabel } from "app/components/common/FieldInputLabel";
import { FieldBackdrop } from "app/components/common/FieldBackdrop";
import Box from "@material-ui/core/Box";
import { Spacing } from "app/theme";
import { SearchInputField } from "../SearchInputField";

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
      <FieldInputLabel label={props.label} />
      <FieldBackdrop>
        <Box marginLeft={Spacing.inputSideSpacing} width="100%">
          <SearchInputField
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
        /* todo: the way text color is set is a bit hacky, should be refactoredd*/
        <FormHelperText
          css={`
            color: rgba(1, 1, 10, 0.38) !important;
          `}
        >
          {props.helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default IconTextInput;
