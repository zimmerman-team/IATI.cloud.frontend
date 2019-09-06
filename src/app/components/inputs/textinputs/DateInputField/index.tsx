import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import FieldInputLabel from 'app/components/common/FieldInputLabel/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const BaseComponent = styled(props => <TextField {...props} />)`
  display: flex !important;
  //align-items: center;

  justify-content: center;
  height: 48px;
  background-color: #f0f3f7;
  border-radius: 2px;

  & [class*='MuiInput-underline']:before,
  & [class*='MuiInput-underline']:after {
    display: none;
  }

  & [class*='MuiInputBase-input'] {
    padding: 0;
  }
  & [class*='MuiInputBase-root'] {
    margin: 0;
    border: initial;
    padding: 0;

    font-size: 16px;
    font-weight: 300;
    color: rgba(1, 1, 10, 0.38);
    margin-left: 15px;
  }
  & [class*='MuiFormLabel-root'] {
    display: none;
  }
`;

export default function DateField(props) {
  const classes = useStyles();

  return (
    <div>
      <FieldInputLabel label={props.label} />
      <BaseComponent
        id="date"
        label={props.label}
        type="date"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
