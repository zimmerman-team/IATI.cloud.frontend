import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButton from 'app/components/inputs/radiobuttons/RadioButton';
import FormItemLabel from 'app/components/sort/FormItemLabel';

function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
<div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Row format</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="rowFormat"
          value={value}
          onChange={handleChange}
        >
          <FormItemLabel
            value="female"
            control={<RadioButton />}
            label="Each unique activity"
          />
          <FormItemLabel
            value="male"
            control={<RadioButton />}
            label="Each financial transaction"
          />
          <FormItemLabel
            value="other"
            control={<RadioButton />}
            label="Each budget in the defined period"
          />
        </RadioGroup>
      </FormControl>
</div>
  );
}

export default RadioButtonsGroup;
