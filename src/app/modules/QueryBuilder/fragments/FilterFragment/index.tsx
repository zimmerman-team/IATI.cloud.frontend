/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import { TextField, Tooltip } from '@material-ui/core';
/* project component */
import { AddFilterModule } from 'app/components/utils/Popover';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { useStoreState } from 'app/state/store';
import { additionalFiltersPopData } from './consts';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';

export const FilterFragment = () => {
  const store = ModuleStore.useStore();
  const setAdditionFilters = e => {
    store.set('additionalFilters')(e);
  };
  const setTextSearchValue = e => {
    store.set('textSearch')(e.target.value);
  };
  const fetchedParticipatingOrgs = useStoreState(state =>
    get(state.participatingOrgs.data, 'results', [])
  );

  const addedFilterOptions = store.get('additionalFilters');

  const allAddFilters = [
    ...additionalFiltersPopData[0][1],
    ...additionalFiltersPopData[1][1],
  ];

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
          onChange={setTextSearchValue}
          helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
        />
      </Grid>

      <Tooltip title="Filter will be implemented when switch to Solr">
        <Grid item xs={12} sm={12} md={6} style={{ opacity: 0.3 }}>
          <ConnectedSelect
            label="Transaction Provider Org"
            options={[]}
            getOptionValue={option => option.code}
            getOptionLabel={option => `${option.code}: ${option.name}`}
          />
        </Grid>
      </Tooltip>

      <Tooltip title="Filter will be implemented when switch to Solr">
        <Grid item xs={12} sm={12} md={6} style={{ opacity: 0.3 }}>
          <ConnectedSelect
            label="Transaction Receiver Org"
            options={[]}
            getOptionValue={option => option.code}
            getOptionLabel={option => `${option.code}: ${option.name}`}
          />
        </Grid>
      </Tooltip>

      <Grid item xs={12} sm={12} md={12}>
        <ConnectedSelect
          label="Participating Organisation"
          options={fetchedParticipatingOrgs}
          value={store.get('participatingOrgs')}
          onChange={e => store.set('participatingOrgs')(e)}
          // placeholder={`All (${fetchedParticipatingOrgs.length})`}
          placeholder={`All participating organisations`}
          getOptionValue={option => option.participating_organisation_ref}
          getOptionLabel={option =>
            `${option.participating_organisation_ref}: ${option.participating_organisation}`
          }
        />
      </Grid>

      {addedFilterOptions.map(addedFilter => {
        return find(allAddFilters, { label: addedFilter }).component({
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
