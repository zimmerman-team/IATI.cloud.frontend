import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import MenuList from '@material-ui/core/MenuList';
import FormHelperText from '@material-ui/core/FormHelperText';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import { Spacing } from 'app/theme/index';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton/index';
import parse from 'html-react-parser';

type MultiSelectProps = {
  label?: string;
  helperText?: string;
  tip?: string;
  data: string[];
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

    &:hover {
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

const MultiSelect: React.FC<MultiSelectProps> = props => {
  const classes = useStyles();
  const [data, setData] = React.useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    setData(event.target.value as string[]);
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
        multiple
        value={data}
        onChange={handleChange}
        MenuProps={{
          classes: {
            paper: classes.menProps,
            list: classes.listProps
          }
        }}
      >
        {props.data.map(item => (
          <BaseMenuItem key={item} value={item}>
            {item}
          </BaseMenuItem>
        ))}
      </BaseSelect>

      {props.helperText && (
        <FormHelperText>{parse(props.helperText)}</FormHelperText>
      )}
    </React.Fragment>
  );
};

export default MultiSelect;
