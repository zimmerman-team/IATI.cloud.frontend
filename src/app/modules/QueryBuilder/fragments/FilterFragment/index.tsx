/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
/* project component */
import { AddFilterModule } from 'app/components/utils/Popover';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
/* utils */
import find from 'lodash/find';
import { additionalFiltersPopData } from './consts';

export const FilterFragment = () => {
  const store = ModuleStore.useStore();
  const setAdditionFilters = e => {
    store.set('additionalFilters')(e);
  };

  const addedFilterOptions = store.get('additionalFilters');

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          fullWidth
          autoFocus
          margin="normal"
          variant="outlined"
          placeholder="Text search"
          label="Data title,activity or descriptions"
          helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <ConnectedSelect
          label="Transaction Provider Org"
          options={[]}
          getOptionValue={option => option.code}
          getOptionLabel={option => `${option.code}: ${option.name}`}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <ConnectedSelect
          label="Transaction Receiver Org"
          options={[]}
          getOptionValue={option => option.code}
          getOptionLabel={option => `${option.code}: ${option.name}`}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          label="Participating Organisation"
          options={[]}
          getOptionValue={option => option.code}
          getOptionLabel={option => `${option.code}: ${option.name}`}
        />
      </Grid>

      {addedFilterOptions.map(filter => {
        const allAddFilters = [
          ...additionalFiltersPopData[0][1],
          ...additionalFiltersPopData[1][1],
        ];
        return find(allAddFilters, { label: filter }).component({
          store,
        });
      })}

      <Grid item xs={12} sm={12} md={4}>
        <AddFilterModule
          data={additionalFiltersPopData}
          onCheckChange={setAdditionFilters}
          addedFilterOptions={addedFilterOptions}
        />
      </Grid>
    </Grid>
  );
};
