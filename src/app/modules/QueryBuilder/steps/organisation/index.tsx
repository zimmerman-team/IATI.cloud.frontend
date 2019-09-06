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
  const fetchedsectorOrganisations = useStoreState(state =>
    get(state.organisations.data, 'results', [])
  );
  const fetchedsectors = useStoreState(state => state.sectors.data);
  const fetchedsectorCategories = useStoreState(
    state => state.sectorCategories.data
  );
  const fetchedCountries = useStoreState(state =>
    get(state.countries.data, 'results', [])
  );
  const fetchedRegions = useStoreState(state =>
    get(state.regions.data, 'results', [])
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
          // placeholder={`All (${fetchedsectorOrganisations.length})`}
          placeholder={`All organisations`}
        />
      </Grid>
      {/** type of organisation */}
      <Grid item xs={12} md={8}>
        <ConnectedSelect
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={e => store.set('organisationTypes')(e)}
          // placeholder={`All (${get(fetchedOrganisationTypes, 'length', 0)})`}
          placeholder={`All organisation types`}
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
      {/** sector category */}
      <Grid item xs={12} md={6}>
        <ConnectedSelect
          {...fragmentConfig.sectorCategory}
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={e => store.set('sectorCategories')(e)}
          // placeholder={`All (${get(fetchedsectorCategories, 'length', 0)})`}
          placeholder={`All categories`}
        />
      </Grid>
      {/** sector */}
      <Grid item xs={12} md={6}>
        <ConnectedSelect
          {...fragmentConfig.organisationSector}
          options={fetchedsectors}
          value={store.get('sectors')}
          onChange={e => store.set('sectors')(e)}
          // placeholder={`All (${get(fetchedsectors, 'length', 0)})`}
          placeholder={`All sectors`}
        />
      </Grid>
      {/** recipient country */}
      <Grid item xs={12} md={12}>
        <ConnectedSelect
          {...fragmentConfig.recipientCountry}
          value={store.get('countries')}
          options={fetchedCountries}
          onChange={e => store.set('countries')(e)}
          // placeholder={`All (${fetchedCountries.length})`}
          placeholder={`All countries`}
        />
      </Grid>
      {/** recipient region */}
      <Grid item xs={12} md={12}>
        <ConnectedSelect
          {...fragmentConfig.recipientRegion}
          value={store.get('regions')}
          options={fetchedRegions}
          onChange={e => store.set('regions')(e)}
          // placeholder={`All (${fetchedRegions.length})`}
          placeholder={`All regions`}
        />
      </Grid>
      {/** must have activity period */}
      <Grid item xs={12} md={4}>
        <SimpleSelect
          label="Must have activity periode"
          data={['Yes', 'No']}
          value={store.get('mustHaveDates')}
          onChange={e => store.set('mustHaveDates')(e)}
        />
      </Grid>
      {/** activity period start date */}
      <Grid item xs={12} md={4}>
        <DateField
          defaultValue="2001-01-01"
          value={store.get('startDate')}
          label="Activity period start date"
          onChange={e => store.set('startDate')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>
      {/** activity period end date */}
      <Grid item xs={12} md={4}>
        <DateField
          defaultValue="2001-01-01"
          value={store.get('endDate')}
          label="Activity period end date"
          onChange={e => store.set('endDate')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>
    </Grid>
  );
};
