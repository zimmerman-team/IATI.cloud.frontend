import React, { createRef } from 'react';
import styled from 'styled-components';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SelectComponent from '@material-ui/core/Select';
import Chip from 'app/components/datadisplay/Chip';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Typography } from '@material-ui/core';
import theme from 'app/theme';
import Component from '@material-ui/core/Chip/Chip';

type ComponentProps = {
  label: string;
  items: string[];
  helperText?: string;
  maxWidth?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled(props => <SelectComponent {...props} />)`
  && {
    & [class*='MuiSelect-selectMenu'] {
      height: 40px;
      background-color: #f0f3f7;
      border-radius: 2px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 12px;
      margin-top: 8px;
      margin-bottom: 4px;
    }
    & [class*='MuiSelect-icon'] {
      padding-right: 16px;
    }
    & [class*='MuiMenu-paper'] {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

const MultiSelectChips: React.FC<ComponentProps> = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [item, setItem] = React.useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    setItem(event.target.value as string[]);
  }

  function handleDelete(items, value) {
    items.splice(items.indexOf(value), 1);
    setItem(items);
  }

  function handleDeleteAll() {
    setItem([]);
  }

  return (
    <Box>
      <Typography variant="caption">{props.label}</Typography>
      <Select
        multiple
        value={item}
        variant="filled"
        onChange={handleChange}
        input={<Input id="select-multiple-chip" disableUnderline />}
        renderValue={selected => (
          <div className={classes.chips}>
            {(selected as string[]).map(value => (
              <Chip label={value} onDelete={() => handleDelete(item, value)} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
        IconComponent={item.length === 0 ? ArrowDropDownIcon : ClearIcon}
      >
        {props.items.map(name => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, item, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="caption">{props.helperText}</Typography>
    </Box>
  );
};

export default MultiSelectChips;
