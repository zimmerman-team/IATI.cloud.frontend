import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';
import { TooltipButton } from 'app/components/inputs/buttons/TooltipButton';
import { createID } from '../../../../utils/removeSpaces';

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

const BaseComponent = styled((props) => <TextField {...props} />)`
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
    font-weight: 200;
    color: rgba(0, 0, 0);
    margin-left: 15px;
  }
  & [class*='MuiFormLabel-root'] {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  label {
    margin-right: 10px;
  }
`;

export const DateField = (props) => {
  return (
    <>
      <Header>
        <FieldInputLabel for={createID(props.label)} label={props.label} />
        {props.tip && <TooltipButton tip={props.tip} />}
      </Header>
      <BaseComponent
        // id={createID(props.label)}
        inputProps={{ id: createID(props.label) }}
        label={props.label}
        type="date"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};
