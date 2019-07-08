import React from 'react';
import BaseButton from 'app/components/inputs/buttons/BaseButton';
import Box from '@material-ui/core/Box';
import { useCopyToClipboard } from 'react-use';
import FieldBackdrop from 'app/components/common/FieldBackdrop';
import BaseTextField from 'app/components/inputs/common/BaseTextField';

type Props = {
  text?: string;
};

const URLField: React.FC<Props> = props => {
  const [text, setText] = React.useState(props.text ? props.text : '');
  const [state, copyToClipboard] = useCopyToClipboard();

  function renderButton() {
    if (text === '') {
      return <BaseButton label="Copy" isdisabled="true" />;
    }
    if (state.value) {
      return <BaseButton label="Copied!" variant="contained" bgcolor="green" />;
    }
    return <BaseButton label="Copy" variant="contained" />;
  }

  function handleChange(e) {
    copyToClipboard('');
    setText(e.currentTarget.value);
  }

  return (
    <FieldBackdrop>
      <BaseTextField
        defaultValue={props.text}
        onChange={e => handleChange(e)}
        {...props}
      />
      <Box width="100px" onClick={() => copyToClipboard(text)}>
        {renderButton()}
      </Box>
    </FieldBackdrop>
  );
};

export default URLField;
