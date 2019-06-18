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

type Props = {
  tip?: string;
};

/* todo: make re-usable component of this */
const GroupTitle = styled(props => <FormLabel {...props} />)`
  && {
    font-size: 12px;
    color: black;

    //margin-bottom: 8px;
  }
`;

const RadioButtonsGroup: React.FC<Props> = props => {
  const [value, setValue] = React.useState('female');

  function handleChange(event: React.ChangeEvent<unknown>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <GroupTitle component="legend">Row format</GroupTitle>
          </Grid>
          <Grid item>
            <TooltipButton tip={props.tip}>i</TooltipButton>
          </Grid>
        </Grid>
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
    </React.Fragment>
  );
};

export default RadioButtonsGroup;
