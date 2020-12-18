/* core */
import React from 'react';
/* third-party */
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
/* project component */
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
/* actions & store */
import { useStoreActions, useStoreState } from 'app/state/store';

type Props = {
  label: string;
  dataKey: string;
  /* todo: replace any with specific type */
  value?: any;
  onChange?: Function;
  placeholder: string;
};

export function AddFilterModule(props: Props) {
  const values = useStoreState((state) =>
    get(state, `${props.dataKey}.data`, [])
  );
  const action = useStoreActions((actions) => actions[props.dataKey].fetch);

  return (
    <Grid item xs={12} sm={12} md={4} key={props.label}>
      <ConnectedSelect
        label={props.label}
        value={props.value}
        options={values || []}
        onChange={props.onChange}
        onMenuOpen={() => {
          if (values.length === 0) {
            action();
          }
        }}
        placeholder={props.placeholder}
        getOptionValue={(option) => option.code}
        getOptionLabel={(option) =>
          `${option.code}${
            props.label === 'IATI version' ? '' : `: ${option.name}`
          }`
        }
      />
    </Grid>
  );
}
