import React from 'react';
import parse from 'html-react-parser';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FieldInputLabel } from 'app/components/common/FieldInputLabel';
import { TooltipButton } from 'app/components/inputs/buttons/TooltipButton';
import { BaseMenuItem } from 'app/components/inputs/selects/common/BaseMenuItem';
import { BaseSelect } from 'app/components/inputs/selects/common/BaseSelect';
import { createID } from '../../../../utils/removeSpaces';

type MultiSelectProps = {
  label?: string;
  helperText?: string;
  tip?: string;
  data: string[];
};

/* todo: make actual components out of these styled constants */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 277,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menProps: {
      transition: 'initial!important',
      borderRadius: '2px',
      marginTop: '40px',
      boxShadow:
        '0 4px 14px -2px rgba(130, 136, 148, 0.28), 0 0 2px 0 rgba(130, 136, 148, 0.22)',
    },
    listProps: {
      padding: 0,
    },
  })
);

export const MultiSelect = (props: MultiSelectProps) => {
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
              <FieldInputLabel for={createID(props.label)} label={props.label} />
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
        // id={createID(props.label)}
        inputProps={{ id: createID(props.label) }}
        multiple
        value={data}
        onChange={handleChange}
        MenuProps={{
          classes: {
            paper: classes.menProps,
            list: classes.listProps,
          },
        }}
      >
        {props.data.map((item) => (
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
