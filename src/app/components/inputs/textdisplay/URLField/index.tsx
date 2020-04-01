import React from 'react';
import { BaseButton } from 'app/components/inputs/buttons/BaseButton';
import Box from '@material-ui/core/Box';
import { useCopyToClipboard } from 'react-use';
import { FieldBackdrop } from 'app/components/common/FieldBackdrop';
import { BaseTextField } from 'app/components/inputs/common/BaseTextField';

type Props = {
  text?: string;
};

export const URLField: React.FC<Props> = props => {
  const [state, copyToClipboard] = useCopyToClipboard();
  
  function renderButton() {
    if (props.text === '') {
      return <BaseButton label="Copy" isdisabled="true" />;
    }

    if (props.text != state.value) {
      return <BaseButton label="Copy" variant="contained" />;
    }

    if (state.value) {
      return <BaseButton label="Copied!" variant="contained" bgcolor="green" />;
    }
    // return <BaseButton label="Copy" variant="contained" />;
  }

  return (
    <FieldBackdrop>
      <BaseTextField value={props.text} />
      <Box
        width="100px"
        onClick={() => copyToClipboard(props.text ? props.text : '')}
      >
        {renderButton()}
      </Box>
    </FieldBackdrop>
  );
};
