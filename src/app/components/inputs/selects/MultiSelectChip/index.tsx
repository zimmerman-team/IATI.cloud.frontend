import React from 'react';
import Select from 'react-select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NoOptionsMessage from './common/NoOptionsMessage';
import Control from './common/Control';
import Option from './common/Option';
import Menu from './common/Menu';
import MultiValue from './common/MultiValue';
import Placeholder from './common/Placeholder';
import SingleValue from './common/SingleValue';
import ValueContainer from './common/ValueContainer';
import { DropdownIndicator } from './common/DropdownIndicator';
import { ClearIndicator } from './common/ClearIndicator';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';
import { TooltipButton } from 'app/components/inputs/buttons/TooltipButton';
import { BaseHelperText } from 'app/components/inputs/selects/common/BaseHelperText';
import { createID } from '../../../../utils/removeSpaces';

type MultiSelectChipProps = {
  id?: string;
  label?: string;
  helperText?: string;
  helperTextLink?: string;
  helperTextUrl?: string;
  helperTextAfter?: string;
  placeholder?: string;
  tooltip?: string;
  className?: string;
  name?: string;
  /* todo: replace any with more specific types */
  value?: any;
  options?: any;
  onChange?: any;
  getOptionLabel?: any;
  getOptionValue?: any;
};

//Todo: refactor to only use styled-components
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto',
    },
    input: {
      display: 'flex',
      paddingLeft: '12px',
      paddingRight: '8px',
      height: 'auto',
      backgroundColor: '#f0f3f7',
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    singleValue: {
      fontSize: 16,
    },
    divider: {
      height: theme.spacing(2),
    },
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
  ClearIndicator,
};

/* todo: move to external component */
const Component = styled(props => <Select {...props} />)`
  &&& [class*='MuiInputBase-root'] {
    padding: 0;
    &:after {
      border: none;
    }

    &:before {
      border: none;
    }

    &:hover {
      border: none;
    }
  }

  &&& [class*='MuiInputBase-input'] {
    min-height: 35px;
    padding-top: 0px;
  }

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
    margin-top: 8px;
    height: 32px;
  }

  svg {
    fill: #828894;
  }
`;

export const MultiSelectChip = (props: MultiSelectChipProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*todo: make reusable component, reused in MultiSelect and SimpleSelect*/}
      {props.label && (
        <Grid container spacing={2}>
          <Grid item>
            <FieldInputLabel for={createID(props.label)} label={props.label} />
          </Grid>
          {props.tooltip && (
            <Grid item>
              <TooltipButton tip={props.tooltip} />
            </Grid>
          )}
        </Grid>
      )}

      <Component
        inputId={createID(props.label)}
        classes={classes}
        components={components}
        isMulti
        {...props}
      />
      <BaseHelperText
        helperText={props.helperText}
        linkText={props.helperTextLink}
        url={props.helperTextUrl}
      />
    </div>
  );
};
