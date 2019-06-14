import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import BaseButton from 'app/components/inputs/buttons/BaseButton';
import Box from '@material-ui/core/Box';
import { useCopyToClipboard } from 'react-use';
import FieldBackdrop from 'app/components/common/FieldBackdrop';
type Props = {
  label?: string;
};

/* todo: create separate component */
const TextFieldMod = styled(props => <TextField {...props} />)`
  width: 100%;

  & [class*='MuiInput-underline']:before,
  & [class*='MuiInput-underline']:after {
    display: none;
  }

  & [class*='MuiInputBase-input'] {
    padding: 0;
  }
  & [class*='MuiInputBase-root'] {
    margin: 0;
    border: initial;
    padding: 0;
    font-size: 16px;
    font-weight: 300;
    margin-left: 15px;
  }
  & [class*='MuiFormLabel-root'] {
    display: none;
  }
`;

const URLField: React.FC<Props> = () => {
  const [text, setText] = React.useState('');
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <FieldBackdrop>
      <TextFieldMod
        defaultValue="http://datastore.iatistandard.org/api/1/access/activity.csv"
        onChange={e => setText(e.target.value)}
      />
      <Box width="100px" onClick={() => copyToClipboard(text)}>
        {/* todo: refactor this logic, is somewhat convoluted */}
        {state.value ? (
          <BaseButton label="Copied!" />
        ) : (
          <BaseButton label="Copy" />
        )}
      </Box>
    </FieldBackdrop>
  );
};

export default URLField;
