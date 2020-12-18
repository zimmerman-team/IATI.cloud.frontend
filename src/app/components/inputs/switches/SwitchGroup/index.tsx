import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Switch } from 'app/components/inputs/switches/Switch';
import { FormItemLabel } from 'app/components/sort/FormItemLabel';

export const SwitchesGroup = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormItemLabel
          for="Option1"
          control={
            <Switch
              id="Option1"
              checked={state.gilad}
              onChange={handleChange('gilad')}
              value="gilad"
            />
          }
          label="Option 1"
        />
        <FormItemLabel
          for="Option2"
          control={
            <Switch
              id="Option2"
              checked={state.jason}
              onChange={handleChange('jason')}
              value="jason"
            />
          }
          label="Option 2"
        />
        <FormItemLabel
          for="Option3"
          control={
            <Switch
              id="Option3"
              checked={state.antoine}
              onChange={handleChange('antoine')}
              value="antoine"
            />
          }
          label="Option 3"
        />
      </FormGroup>
    </FormControl>
  );
};
