import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import MenuList from '@material-ui/core/MenuList';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import { Spacing } from 'app/theme/index';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton/index';
import parse from 'html-react-parser';

import BaseMenuItem from 'app/components/inputs/selects/common/BaseMenuItem';
import BaseSelect from 'app/components/inputs/selects/common/BaseSelect';

import './style.css';
type SimpleSelectProps = {
  label?: string;
  helperText?: string;
  tip?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '20px'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 277
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    menProps: {
      transition: 'initial!important',
      borderRadius: '2px',
      marginTop: '40px',
      boxShadow:
        '0 4px 14px -2px rgba(130, 136, 148, 0.28), 0 0 2px 0 rgba(130, 136, 148, 0.22)'
    },
    listProps: {
      padding: 0
    }
  })
);

const SimpleSelect: React.FC<SimpleSelectProps> = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai'
  });

  function handleChange(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value
    }));
  }

  return (
    <React.Fragment>
      {props.label && (
        <>
          <Grid container spacing={2}>
            <Grid item>
              <FieldInputLabel label={props.label} />
            </Grid>
            {props.tip && (
              <Grid item>
                <TooltipButton tip={props.tip} />
              </Grid>
            )}
          </Grid>
        </>
      )}

      <BaseSelect
        value={values.age}
        onChange={handleChange}
        MenuProps={{
          classes: {
            paper: classes.menProps,
            list: classes.listProps
          }
        }}
      >
        <BaseMenuItem value="">
          <em>None</em>
        </BaseMenuItem>
        <BaseMenuItem value={10}>Ten</BaseMenuItem>
        <BaseMenuItem value={20}>Twenty</BaseMenuItem>
        <BaseMenuItem value={30}>Thirty</BaseMenuItem>
      </BaseSelect>

      {props.helperText && (
        <FormHelperText>{parse(props.helperText)}</FormHelperText>
      )}
      {/*{props.helperText && <div>{parse('<a href="www.nu.nl">sibling 1</a>')}</div>}*/}
    </React.Fragment>
  );
};

export default SimpleSelect;
