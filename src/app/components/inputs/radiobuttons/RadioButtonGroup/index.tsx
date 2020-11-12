/* core */
import React from 'react';
/* third-party */
import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
/* project component */
import { RadioGroupItem } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupItem';
import { createID } from '../../../../utils/removeSpaces';

type ItemModel = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioButtonsGroupModel = {
  title?: string;
  tip?: string;
  items: ItemModel[];
  onChange?: Function;
  groupID?: string;
  value?: string;
};

const CustomFormControl = styled(props => <FormControl {...props} />)`
  width: 100%;
  > div {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    > label {
      width: 33%;
      font-weight: normal;
    }
  }
`;

export const RadioButtonsGroup = (props: RadioButtonsGroupModel) => {
  return (
    <>
      <CustomFormControl component="fieldset">
        <RadioGroup value={props.value}>
          {props.items.map(item => (
            <RadioGroupItem
              for={createID(item.label)}
              disabled={item.disabled}
              key={item.value}
              value={item.value}
              onChange={props.onChange}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </CustomFormControl>
    </>
  );
};
