import React, { ChangeEvent } from 'react';
import ChipInput from 'material-ui-chip-input';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';
import Chip from 'app/components/datadisplay/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';
type Props = {
  value?: any;
};

const Component = styled(props => <ChipInput {...props} />)`
  && {
    display: flex;
    flex-direction: column;
    background: #f0f3f7;
    padding-left: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 600px;

    & [class*='WAMuiChipInput-inputRoot'] {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
`;
<<<<<<< HEAD:src/app/components/inputs/ChipInput/index.jsx

const Container = props => {
=======
const Container: React.FC<Props> = props => {
>>>>>>> 09ec75b47a7b8c73a25e71086e855d26bbdc515a:src/app/components/inputs/ChipInput/index.tsx
  return (
    <NoSsr>
      <Component
        clickable="false"
        disableUnderline
        defaultValue={[
          'foo',
          'bar',
          'lorem',
          'ipsum',
          'dolor',
          'simet',
          'foo',
          'bar',
          'lorem',
          'ipsum',
          'dolor',
          'simet'
        ]}
        chipRenderer={(
          { value, isFocused, isDisabled, handleClick, handleDelete },
          key
        ) => <Chip key={key} label={value} />}
        InputLabelProps={{
          shrink: false
        }}
        {...props}
      />
      <FormHelperText>
        See OIPA documentation for full list of possible elements
      </FormHelperText>
    </NoSsr>
  );
};

export default Container;
