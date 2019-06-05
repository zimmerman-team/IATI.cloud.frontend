import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import MenuList from '@material-ui/core/MenuList';

const TestGrid = styled.div`
  position: relative;
  display: flex;
`;

const BaseInputLabel = styled(props => <InputLabel {...props} />)`
  && {
    font-size: 12px;
    color: black;
    margin-bottom: 8px;
    //outline: 1px solid blue;
    & [class*='MuiIconButton-label'] {
    }
  }
`;

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
    min-width: 270px;
    & [class*='MuiSelect-select'] {
      &:focus {
        background-color: #f0f3f7 !important;
      }
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
    & [class*='MuiIconButton-label'] {
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

function SimpleSelect() {
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
    <form className={classes.root} autoComplete="off">
      <Grid>
        <BaseInputLabel>Empty label</BaseInputLabel>

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
      </Grid>
    </form>
  );
}

export default SimpleSelect;
