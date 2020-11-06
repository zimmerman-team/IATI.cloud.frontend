import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';
import { FormItemLabel } from 'app/components/sort/FormItemLabel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    option1: true,
    option2: false,
    option3: false,
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormItemLabel
            for="option1"
            control={
              <Checkbox
                id="option1"
                checked={state.option1}
                onChange={handleChange('option1')}
                value="option1"
                color="primary"
              />
            }
            label="Option 1"
          />
          <FormItemLabel
            for="option2"
            control={
              <Checkbox
                id="option2"
                checked={state.option2}
                onChange={handleChange('option2')}
                value="option2"
              />
            }
            label="Option 2"
          />
          <FormItemLabel
            for="option3"
            control={
              <Checkbox
                id="option3"
                checked={state.option3}
                onChange={handleChange('option3')}
                value="option3"
              />
            }
            label="Option 3"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;
