/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
/* actions & store */
import { useStoreState, useStoreActions } from 'app/state/store';
import get from 'lodash/get';

type Props = {
  label: string;
  dataKey: string;
  value?: any;
  onChange?: Function;
  placeholder: string;
};

export function AddFilterModule(props: Props) {
  const values = useStoreState(state =>
    get(state, `${props.dataKey}.data`, [])
  );
  const action = useStoreActions(actions => actions[props.dataKey].fetch);
  const label = props.label;
  if (label === "IATI version") {
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
            getOptionValue={option => option.code}
            getOptionLabel={option => `${option.code}`}
          />
        </Grid>
      );
  }

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
        getOptionValue={option => option.code}
        getOptionLabel={option => `${option.code}: ${option.name}`}
      />
    </Grid>
  );


}
