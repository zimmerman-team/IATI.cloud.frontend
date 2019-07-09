/* core */
import React, { useState, useEffect, useMemo } from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import MultiSelectChip from 'app/components/inputs/selects/MultiSelectChip';
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
/* common */
import { useStoreState } from 'app/state/store';
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */
import { fragmentConfig } from './model';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';

export const WhoFragment = () => {
  const fetchedOrganisationTypes = useStoreState(
    state => state.organisationTypes.data
  );
  const fetchedsectorCategories = useStoreState(
    state => state.sectorCategories.data
  );
  const fetchedsectorOrganisations = useStoreState(
    state => state.organisations.data
  );

  const store = ModuleStore.useStore();

  return (
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.description}
    >
      <Grid item xs={12} sm={6} md={12}>
        <MultiSelectChip
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={e => store.set('organisationTypes')(e)}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={8}>
        <MultiSelectChip
          {...fragmentConfig.organisationSector}
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={e => store.set('sectorCategories')(e)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {/*<SimpleSelect
          data={['Yes', 'No']}
          label="Include secondary reporters Y/N"
          tip="empty tooltip"
        />*/}
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <MultiSelectChip
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          options={fetchedsectorOrganisations}
          onChange={e => store.set('organisations')(e)}
        />
      </Grid>
    </ModuleFragment>
  );
};
