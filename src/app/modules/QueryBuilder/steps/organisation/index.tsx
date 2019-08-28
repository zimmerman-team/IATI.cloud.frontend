import { Grid } from '@material-ui/core';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { Skeletor } from 'app/components/utils/Skeletor';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { useStoreState } from 'app/state/store';
import React from 'react';
import { fragmentConfig } from 'app/modules/QueryBuilder/steps/organisation/model';

export const OrganisationFragment = () => {

  const store = ModuleStore.useStore();

  /* getting the fetched datat from the app store */
  const fetchedOrganisationTypes = useStoreState(
    state => state.organisationTypes.data,
  );
  const fetchedsectorCategories = useStoreState(
    state => state.sectorCategories.data,
  );
  const fetchedsectorOrganisations = useStoreState(
    state => state.organisations.data,
  );

  return (
    <Grid container spacing={4}>
      {/** reporting organisation*/}
      <Grid item xs={12} md={12}>
        {/** <Skeletor />*/}

        <ConnectedSelect
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={e => store.set('organisationTypes')(e)}
        />
      </Grid>
      {/** type of organisation */}
      <Grid item xs={12} md={8}>
        {/** <Skeletor />*/}

        <ConnectedSelect
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          options={fetchedsectorOrganisations}
          onChange={e => store.set('organisations')(e)}
        />
      </Grid>
      {/** secondary publisher */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** sector */}
      <Grid item xs={12} md={6}>
        {/** <Skeletor />*/}

        <ConnectedSelect
          {...fragmentConfig.organisationSector}
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={e => store.set('sectorCategories')(e)}
        />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={6}>
        <Skeletor />
      </Grid>
      {/** recipient country */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** recipient region */}
      <Grid item xs={12} md={12}>
        <Skeletor />
      </Grid>
      {/** must have activity period */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** activity period start date */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
      {/** activity period end date */}
      <Grid item xs={12} md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};
