/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
/* actions & store */
import { useStoreState } from 'app/state/store';
import get from 'lodash/get';

type Props = {
  label: string;
  dataKey: string;
  value?: any;
  onChange?: Function;
};

export function AddFilterModule(props: Props) {
  const values = useStoreState(state =>
    get(state, `${props.dataKey}.data`, [])
  );
  return (
    <Grid item xs={12} sm={12} md={4} key={props.label}>
      <ConnectedSelect
        label={props.label}
        value={props.value}
        options={values || []}
        onChange={props.onChange}
        getOptionValue={option => option.code}
        placeholder={`All (${get(values, 'length', 0)})`}
        getOptionLabel={option => `${option.code}: ${option.name}`}
      />
    </Grid>
  );
}
