import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';

type Props = {
  placeholder?: string;
  prefill?: string;
  ariaLabel?: string;
  label?: string;
  helperText: string;
};

const Papier = styled.div`
  height: 48px;
  border-radius: 2px;
  background-color: #f0f3f7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

const IconTextInput: React.FC<Props> = props => {
  return (
    <div>
      {props.label && <FieldInputLabel label={props.label} />}
      <Papier>
        <InputBase
          placeholder={props.placeholder ? props.placeholder : 'Empty'}
          inputProps={{ 'aria-label': 'Placeholder text' }}
        />
        <SearchIcon />
      </Papier>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </div>
  );
};

export default IconTextInput;
