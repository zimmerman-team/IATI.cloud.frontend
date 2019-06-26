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
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FieldInputLabel from '../../../common/FieldInputLabel';
import TooltipButton from '../../buttons/TooltipButton';
import BaseHelperText from '../common/BaseHelperText';

type MultiSelectChipProps = {
  label?: string;
  helperText?: string;
  helperTextLink?: string;
  helperTextUrl?: string;
  placeholder?: string;
  tooltip?: string;
  search?: boolean;
};

interface OptionType {
  label: string;
  value: string;
}
//Todo: refactor to only use styled-components
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto'
    },
    input: {
      display: 'flex',
      paddingLeft: '12px',
      paddingRight: '8px',
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
    // paper: {
    //   position: 'absolute',
    //   zIndex: 1,
    //   marginTop: theme.spacing(1),
    //   left: 0,
    //   right: 0
    // },
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
    padding: 0;
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
    min-height: 35px;
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
  & [class*='MuiChip-root'] {
    margin: 0 4px;
    height: 32px;
  }

  svg {
    fill: #828894;
  }
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
        {/*todo: make reusable component, reused in MultiSelect and SimpleSelect*/}
        {props.label && (
          <Grid container spacing={2}>
            <Grid item>
              <FieldInputLabel label={props.label} />
            </Grid>
            {props.tooltip && (
              <Grid item>
                <TooltipButton tip={props.tooltip} />
              </Grid>
            )}
          </Grid>
        )}
        {/*=======================================================================*/}

        <Component
          classes={classes}
          inputId="react-select-multiple"
          placeholder={props.placeholder}
          options={suggestions}
          components={components}
          value={multi}
          onChange={handleChangeMulti}
          isMulti
          search={props.search}
        />
        <BaseHelperText
          helperText={props.helperText}
          linkText={props.helperTextLink}
          url={props.helperTextUrl}
        />
      </NoSsr>
    </div>
  );
};

export default MultiSelectChip;
