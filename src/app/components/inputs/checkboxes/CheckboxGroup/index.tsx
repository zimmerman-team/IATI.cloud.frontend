import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from 'app/components/inputs/checkboxes/Checkbox';
import FormItemLabel from 'app/components/sort/FormItemLabel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormItemLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange('gilad')}
                value="gilad"
                color="primary"
              />
            }
            label="Gilad Gray"
          />
          <FormItemLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange('jason')}
                value="jason"
              />
            }
            label="Jason Killian"
          />
          <FormItemLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange('antoine')}
                value="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;
