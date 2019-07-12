import React from 'react';
import RadioButton from 'app/components/inputs/radiobuttons/RadioButton';
import FormItemLabel from 'app/components/sort/FormItemLabel';

type Props = {
  value?: string;
  label?: string;
};

export const RadioGroupItem = (props: Props) => {
  return (
    <FormItemLabel
      value={props.value}
      control={<RadioButton />}
      label={props.label}
    />
  );
};
