import React from 'react';
import Select from 'react-select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import styled from 'styled-components';

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
      paddingLeft: '12px',
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
    singleValue: {
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

const Component = styled(props => <Select {...props} />)`
  &&& [class*='MuiInputBase-root'] {
    padding-top: 8px;

    &:after {
      border: none;
    }
    ,
    &:before {
      border: none;
    }
    ,
    &:hover {
      border: none;
    }
  }
  ,
  &&& [class*='MuiInputBase-input'] {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  ,
  & [class*='MuiInputLabel-root'] {
    font-family: Inter;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.4;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
  }

  &&& [class*='Mui-focused'] {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const HelperText = styled(props => <FormHelperText {...props} />)`
  margin-top: 4px !important;
`;

const MultiSelectChip: React.FC<MultiSelectChipProps> = props => {
  const classes = useStyles();

  const [multi, setMulti] = React.useState<ValueType<OptionType>>(null);

  function handleChangeMulti(value: ValueType<OptionType>) {
    setMulti(value);
  }

  return (
    <div className={classes.root}>
      <NoSsr>
        <Component
          classes={classes}
          inputId="react-select-multiple"
          TextFieldProps={{
            label: 'Countries',
            InputLabelProps: {
              htmlFor: 'react-select-multiple',
              shrink: true,
              disableAnimation: true,
              classes: {}
            },
            placeholder: 'Select multiple countries'
          }}
          options={suggestions}
          components={components}
          value={multi}
          onChange={handleChangeMulti}
          isMulti
        />
        {props.helperText && <HelperText>{parse(props.helperText)}</HelperText>}
      </NoSsr>
    </div>
  );
};

export default MultiSelectChip;
