import React from 'react';
import RadioButton from 'app/components/inputs/radiobuttons/RadioButton';
import FormItemLabel from 'app/components/sort/FormItemLabel';

type Props = {
  value?: string;
  label?: string;
  disabled?: boolean;
  onChange?: Function;
};

export const RadioGroupItem = (props: Props) => {
  return <FormItemLabel {...props} control={<RadioButton />} />;
};
