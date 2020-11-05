//cc:query builder module#; query builder fragments - core filters
//cc:query builder module fragments#; query builder fragments - core filters;fragment layout and logic
/* core */
import React from 'react';
/* third-party */
import { Grid } from '@material-ui/core';
/* project component */
import { SimpleSelect } from 'app/components/inputs/selects/SimpleSelect';
import { DateField } from 'app/components/inputs/textinputs/DateInputField';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { fragmentConfig } from 'app/modules/querybuilder-module/fragments/core-filters/model';
/* utils */
import get from 'lodash/get';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';

import { QbStepNavigator } from 'app/modules/querybuilder-module/common/QbStepNavigator';
import { QbStepNavigatorButton } from 'app/modules/querybuilder-module/common/QbStepNavigatorButton';
import IconTextInput from 'app/components/inputs/textinputs/IconTextInputFIeld';
import { FormResetButton } from 'app/modules/querybuilder-module/common/FormResetButton';

export const CoreFiltersFragment = () => {
  const store = ModuleStore.useStore();

  /* getting the fetched data from the app store */
  const fetchedOrganisationTypes = useStoreState(
    (state) => state.organisationTypes.data
  );
  const fetchedsectorOrganisations = useStoreState((state) =>
    get(state.organisations.data, 'results', [])
  );
  const fetchedsectors = useStoreState((state) => state.sectors.data);
  const fetchedsectorCategories = useStoreState(
    (state) => state.sectorCategories.data
  );
  const fetchsectorVocabularies = useStoreState(
    (state) => state.sectorVocabularies.data
  );
  const fetchedCountries = useStoreState((state) =>
    get(state.countries.data, 'results', [])
  );
  const fetchedRegions = useStoreState((state) =>
    get(state.regions.data, 'results', [])
  );
  const fetchedSecondaryReporter = useStoreState(
    (state) => state.secondaryReporter.data
  );

  const setTextSearchValue = (e) => {
    store.set('textSearch')(encodeURIComponent(e));
  };

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      // direction="column"
    >
      {/** Data title, activity, or descriptions*/}
      {/* TODO: Search functionality currently not working*/}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <IconTextInput
          label="Data title, activity, or descriptions"
          placeholder="Text search"
          onChange={setTextSearchValue}
          value={store.get('textSearch')}
          helperText="Have a minimum of 1-2 other filters selected to avoid searching the entire database"
        />
      </Grid>

      {/** reporting organisation*/}
      <Grid item xs={12} md={12} lg={12}>
        <ConnectedSelect
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          options={fetchedsectorOrganisations.sort((a, b) => a.reporting_organisation.localeCompare(b.reporting_organisation))}
          onChange={(e) => store.set('organisations')(e)}
          // placeholder={`All (${fetchedsectorOrganisations.length})`}
          placeholder={`All organisations`}
          // helperText="e.g. AT-12 = Ministry of Interior."
        />
      </Grid>
      {/** type of organisation */}
      <Grid item xs={12} md={8} lg={8}>
        <ConnectedSelect
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={(e) => store.set('organisationTypes')(e)}
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
          onChange={(e) => store.set('secondaryReporter')(e)}
          placeholder={`All options`}
        />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={12} lg={6}>
        <ConnectedSelect
          {...fragmentConfig.sectorCategory}
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={(e) => store.set('sectorCategories')(e)}
          // placeholder={`All (${get(fetchedsectorCategories, 'length', 0)})`}
          placeholder={`All categories`}
        />
      </Grid>

      {/** sector vocabulary */}
      <Grid item xs={12} md={12} lg={6}>
        <ConnectedSelect
          {...fragmentConfig.sectorVocabulary}
          value={store.get('sectorVocabularies')}
          options={fetchsectorVocabularies}
          onChange={(e) => store.set('sectorVocabularies')(e)}
          // placeholder={`All (${get(fetchedsectorCategories, 'length', 0)})`}
          placeholder={`All vocabularies`}
        />
      </Grid>

      {/** sector */}
      <Grid item xs={12} md={12} lg={6}>
        <ConnectedSelect
          {...fragmentConfig.organisationSector}
          options={fetchedsectors}
          value={store.get('sectors')}
          onChange={(e) => store.set('sectors')(e)}
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
          onChange={(e) => store.set('countries')(e)}
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
          onChange={(e) => store.set('regions')(e)}
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
          onChange={(e) => store.set('mustHaveDates')(e)}
        />
      </Grid>
      {/** activity/budget period start date (from) */}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('startDateAfter')}
          label="Activity / Budget start date (from)"
          onChange={(e) => store.set('startDateAfter')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
          tip="Use this to filter by activities/budgets that have a start date that is greater than or equal to your chosen date"
        />
      </Grid>
      {/** activity/budget  end date (from) */}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('endDateAfter')}
          label="Activity / Budget end date (from)"
          onChange={(e) => store.set('endDateAfter')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
          tip="Use this to filter by activities/budgets that have an end date that is greater than or equal to your chosen date"
        />
      </Grid>
      {/** empty grid here **/}
      <Grid item xs={12} md={4} lg={4} />
      {/** activity/budget  start date (to)*/}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('startDateBefore')}
          label="Activity / Budget start date (to)"
          onChange={(e) => store.set('startDateBefore')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
          tip="Use this to filter by activities/budgets that have an end date that is greater than or equal to your chosen date"
        />
      </Grid>
      {/** activity/budgegt end date (to)*/}
      <Grid item xs={12} md={4} lg={4}>
        <DateField
          // defaultValue="2001-01-01"
          value={store.get('endDateBefore')}
          label="Activity / Budget end date (to)"
          onChange={(e) => store.set('endDateBefore')(e)}
          disabled={store.get('mustHaveDates') === 'No'}
          tip="Use this to filter by activities/budgets that have an end date that is less than or equal to your chosen date"
        />
      </Grid>

      <QbStepNavigator>
        <Grid
          item
          container
          sm={12}
          md={12}
          css={`
            justify-content: flex-end;
          `}
        >
          <FormResetButton />
          <QbStepNavigatorButton
            label="Next"
            path="/querybuilder/additional-filters"
          />
        </Grid>
      </QbStepNavigator>
    </Grid>
  );
};
