/* eslint-disable react/jsx-props-no-spreading */
/* core */
import React from 'react';
/* third-party */
import { Grid } from '@material-ui/core';
/* project component */
import { SimpleSelect } from 'app/components/inputs/selects/SimpleSelect';
import { DateField } from 'app/components/inputs/textinputs/DateInputField';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { fragmentConfig } from 'app/modules/QueryBuilder/fragments/core-filters/model';
/* utils */
import get from 'lodash/get';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';

import { QbStepNavigator } from 'app/modules/QueryBuilder/common/QbStepNavigator';
import { QbStepNavigatorButton } from 'app/modules/QueryBuilder/common/QbStepNavigatorButton';

export const CoreFiltersFragment = () => {
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
  const fetchedSecondaryReporter = useStoreState(
    state => state.secondaryReporter.data
  );

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      // direction="column"
    >
      {/** reporting organisation*/}
      <Grid item xs={12} md={12} lg={12}>
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
      <Grid item xs={12} md={8} lg={8}>
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
      <Grid item xs={12} md={4} lg={4}>
        <ConnectedSelect
          {...fragmentConfig.secondaryReporter}
          options={fetchedSecondaryReporter}
          value={store.get('secondaryReporter')}
          onChange={e => store.set('secondaryReporter')(e)}
          placeholder={`All options`}
        />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={12} lg={6}>
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
      <Grid item xs={12} md={12} lg={6}>
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
      <Grid item xs={12} md={12} lg={12}>
        <ConnectedSelect
          {...fragmentConfig.recipientRegion}
          value={store.get('regions')}
          options={fetchedRegions}
          onChange={e => store.set('regions')(e)}
          // placeholder={`All (${fetchedRegions.length})`}
          placeholder={`All regions`}
        />
      </Grid>
      {/** Filter by date */}
      <Grid item xs={12} md={4} lg={4}>
        <SimpleSelect
          label="Filter by Date?"
          data={['Yes', 'No']}
          value={store.get('mustHaveDates')}
          onChange={e => store.set('mustHaveDates')(e)}
        />
      </Grid>
      {/** activity/budget period start date (after) */}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('startDateAfter')}
          label="Activity / Budget start date (after)"
          onChange={e => store.set('startDateAfter')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>
      {/** activity/budget  end date (after) */}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('endDateAfter')}
          label="Activity / Budget end date (after)"
          onChange={e => store.set('endDateAfter')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>
      {/** empty grid here **/}
      <Grid item xs={12} md={4} lg={4} />
      {/** activity/budget  start date (before)*/}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('startDateBefore')}
          label="Activity / Budget start date (before)"
          onChange={e => store.set('startDateBefore')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>
      {/** activity/budgegt end date (before)*/}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('endDateBefore')}
          label="Activity / Budget end date (before)"
          onChange={e => store.set('endDateBefore')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
        />
      </Grid>

      <QbStepNavigator>
        <QbStepNavigatorButton
          label="Next"
          path="/querybuilder/additional-filters"
        />
      </QbStepNavigator>
    </Grid>
  );
};
