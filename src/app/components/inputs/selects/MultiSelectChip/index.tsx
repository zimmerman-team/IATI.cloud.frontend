import React, { CSSProperties } from 'react';
import Select from 'react-select';
import {
  createStyles,
  emphasize,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { ValueType } from 'react-select/lib/types';
import NoOptionsMessage from './common/NoOptionsMessage';
import suggestions from './mock';
import Control from './common/Control';
import Option from './common/Option';
import Menu from './common/Menu';
import MultiValue from './common/MultiValue';
import Placeholder from './common/Placeholder';
import SingleValue from './common/SingleValue';
import ValueContainer from './common/ValueContainer';
import DropdownIndicator from './common/DropdownIndicator';
import ClearIndicator from './common/ClearIndicator';
import FormHelperText from '@material-ui/core/FormHelperText';
import parse from 'html-react-parser';

type MultiSelectChipProps = {
  label?: string;
  helperText?: string;
};

interface OptionType {
  label: string;
  value: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto'
    },
    input: {
      display: 'flex',
      paddingLeft: '16px',
      height: 'auto',
      backgroundColor: '#f0f3f7'
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden'
    },
    chip: {
      margin: theme.spacing(0.5, 0.25)
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[700],
        0.08
      )
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2)
    },
    singleValue: {
      fontSize: 16
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      bottom: 6,
      fontSize: 16
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing(2)
    }
  })
);

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator,
  ClearIndicator
};

const MultiSelectChip: React.FC<MultiSelectChipProps> = props => {
  const classes = useStyles();
  const theme = useTheme();

  const [multi, setMulti] = React.useState<ValueType<OptionType>>(null);

  function handleChangeMulti(value: ValueType<OptionType>) {
    setMulti(value);
  }

  const selectStyles = {
    input: (base: CSSProperties) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId="react-select-multiple"
          TextFieldProps={{
            label: 'Countries',
            InputLabelProps: {
              htmlFor: 'react-select-multiple',
              shrink: true
            },
            placeholder: 'Select multiple countries'
          }}
          options={suggestions}
          components={components}
          value={multi}
          onChange={handleChangeMulti}
          isMulti
        />
        {props.helperText && (
          <FormHelperText>{parse(props.helperText)}</FormHelperText>
        )}
      </NoSsr>
    </div>
  );
};

export default MultiSelectChip;
