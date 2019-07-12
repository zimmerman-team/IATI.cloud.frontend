import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButton from 'app/components/inputs/radiobuttons/RadioButton';
import FormItemLabel from 'app/components/sort/FormItemLabel';
import styled from 'styled-components';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { RadioGroupItem } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupItem';

type ItemModel = {
  value: string;
  label: string;
};
export type RadioButtonsGroupModel = {
  title?: string;
  tip?: string;
  items: ItemModel[];
  groupID?: string;
};

const RadioButtonsGroup = (props: RadioButtonsGroupModel) => {
  const [value, setValue] = React.useState('0');

  function handleChange(event: React.ChangeEvent<unknown>) {
    // todo: implement module store logic
    setValue((event.target as HTMLInputElement).value);
    console.log('value has been set to', value);
  }

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="rowFormat"
          value={value}
          onChange={handleChange}
        >
          {props.items &&
            props.items.map(item => (
              <RadioGroupItem value={item.value} label={item.label} />
            ))}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default RadioButtonsGroup;
