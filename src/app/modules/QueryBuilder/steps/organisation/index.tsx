/* eslint-disable react/jsx-props-no-spreading */
/* core */
import React from 'react';
/* third-party */
import { Grid } from '@material-ui/core';
/* project component */
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
import DateField from 'app/components/inputs/textinputs/DateInputField';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { fragmentConfig } from 'app/modules/QueryBuilder/steps/organisation/model';
/* utils */
import get from 'lodash/get';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';

export const OrganisationFragment = () => {
  const store = ModuleStore.useStore();

  /* getting the fetched data from the app store */
  const fetchedOrganisationTypes = useStoreState(
    state => state.organisationTypes.data
  );
  const fetchedsectorCategories = useStoreState(
    state => state.sectorCategories.data
  );
  const fetchedsectorOrganisations = useStoreState(
    state => state.organisations.data
  );

  return (
    <Grid container spacing={4}>
      {/** reporting organisation*/}
      <Grid item xs={12} md={12}>
        <ConnectedSelect
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          options={fetchedsectorOrganisations}
          onChange={e => store.set('organisations')(e)}
          placeholder={`All (${get(fetchedsectorOrganisations, 'length', 0)})`}
        />
      </Grid>
      {/** type of organisation */}
      <Grid item xs={12} md={8}>
        <ConnectedSelect
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={e => store.set('organisationTypes')(e)}
          placeholder={`All (${get(fetchedOrganisationTypes, 'length', 0)})`}
        />
      </Grid>
      {/** secondary publisher */}
      <Grid item xs={12} md={4}>
        <ConnectedSelect
          {...fragmentConfig.secondaryPublisher}
          options={[]}
          value={[]}
        />
      </Grid>
      {/** sector */}
      <Grid item xs={12} md={6}>
        <ConnectedSelect
          {...fragmentConfig.organisationSector}
          options={[]}
          value={[]}
        />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={6}>
        <ConnectedSelect
          {...fragmentConfig.sectorCategory}
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={e => store.set('sectorCategories')(e)}
          placeholder={`All (${get(fetchedsectorCategories, 'length', 0)})`}
        />
      </Grid>
      {/** recipient country */}
      <Grid item xs={12} md={12}>
        <ConnectedSelect
          {...fragmentConfig.recipientCountry}
          options={[]}
          value={[]}
        />
      </Grid>
      {/** recipient region */}
      <Grid item xs={12} md={12}>
        <ConnectedSelect
          {...fragmentConfig.recipientRegion}
          options={[]}
          value={[]}
        />
      </Grid>
      {/** must have activity period */}
      <Grid item xs={12} md={4}>
        <SimpleSelect label="Must have activity periode" data={['Yes', 'No']} />
      </Grid>
      {/** activity period start date */}
      <Grid item xs={12} md={4}>
        <DateField />
      </Grid>
      {/** activity period end date */}
      <Grid item xs={12} md={4}>
        <DateField />
      </Grid>
    </Grid>
  );
};
