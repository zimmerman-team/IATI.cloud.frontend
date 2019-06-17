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
import './style.css';
type SimpleSelectProps = {
  label?: string;
  helperText?: string;
  tip?:string;
};

/* todo: make actual components out of these styled constants */

const BaseInput = styled(props => <InputBase {...props} />)`
  && {
    border-radius: 2px;
    height: 48px;
  }
`;

const BaseSelect = styled(props => (
  <Select
    {...props}
    input={<BaseInput name="age" id="outlined-age-simple" />}
  />
))`
  && {
    background-color: #f0f3f7;
    margin: 0;
    //min-width: 270px;
    width: 100%;
   
    & [class*='MuiSelect-select'] {
      padding-left: ${Spacing.inputSideSpacing};
      &:focus {
        background-color: #f0f3f7 !important;
      }
    }

    & [class*='MuiSelect-icon'] {
      margin-right: 8px;
    }
  }
`;

const BaseMenuList = styled(props => <MenuList {...props} />)`
  && {
    margin: 0;
    outline: 1px solid cyan;
  }
`;

const BaseMenuItem = styled(props => <MenuItem {...props} />)`
  && {
    height: 48px;
  
  
  
&:hover{
background-color: #e2e6eb;
}


  }
`;

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
      borderRadius: '2px'
      // top: '68px!important',
      // left: '0!important'
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
      {props.label && (<><Grid container spacing={2}><Grid item><FieldInputLabel label={props.label} /></Grid>{props.tip && <Grid item><TooltipButton tip={props.tip}/></Grid>}</Grid></>)}

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
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </React.Fragment>
  );
};

export default SimpleSelect;
