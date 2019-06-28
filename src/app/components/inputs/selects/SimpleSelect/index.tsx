import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';
import FieldInputLabel from 'app/components/common/FieldInputLabel';
import TooltipButton from 'app/components/inputs/buttons/TooltipButton/index';
import BaseMenuItem from 'app/components/inputs/selects/common/BaseMenuItem';
import BaseSelect from 'app/components/inputs/selects/common/BaseSelect';
import './style.css';
import BaseHelperText from '../common/BaseHelperText';

type SimpleSelectProps = {
  label?: string;
  helperText?: string;
  helperTextLink?: string;
  helperTextUrl?: string;
  tip?: string;
  data: string[];
};
//TODO: Refactor to styled components
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
      padding: '4px 0'
    }
  })
);

const SimpleSelect: React.FC<SimpleSelectProps> = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    setValues(event.target.value as string[]);
  }

  return (
    <React.Fragment>
      {props.label && (
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
      )}
      <BaseSelect
        value={values}
        onChange={handleChange}
        MenuProps={{
          classes: {
            paper: classes.menProps,
            list: classes.listProps
          }
        }}
      >
        {props.data.map(item => (
          <BaseMenuItem value={item} key={item}>
            {item}
          </BaseMenuItem>
        ))}
      </BaseSelect>

      <BaseHelperText
        helperText={props.helperText}
        linkText={props.helperTextLink}
        url={props.helperTextUrl}
      />
    </React.Fragment>
  );
};

export default SimpleSelect;
