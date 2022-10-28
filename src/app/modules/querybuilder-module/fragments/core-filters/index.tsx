// cc:query builder module#; query builder fragments - core filters
// cc:query builder module fragments#; query builder fragments - core filters;fragment layout and logic
/* core */
import React from 'react';
/* third-party */
import { Grid } from '@material-ui/core';
/* project component */
import { AsyncSelect } from 'app/components/inputs/selects/AsyncSelect';
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
      {/** Data title, activity, or descriptions */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <IconTextInput
          label="Data title, activity, or descriptions"
          placeholder="Text search"
          onChange={setTextSearchValue}
          value={store.get('textSearch')}
          helperText="Have a minimum of 1-2 other filters selected to avoid searching the entire database"
        />
      </Grid>

      {/** reporting organisation */}
      <Grid item xs={12} md={12} lg={12}>
        <AsyncSelect
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          onChange={(e) => store.set('organisations')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value
              : option.value
          }
          placeholder="All organisations"
          pivot="reporting_org_ref"
          subPivot="reporting_org_narrative"
        />
      </Grid>

      {/** type of organisation */}
      <Grid item xs={12} md={8} lg={8}>
        <AsyncSelect
          {...fragmentConfig.organisationTypes}
          value={store.get('organisationTypes')}
          onChange={(e) => store.set('organisationTypes')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value
              : option.value
          }
          placeholder="All organisation types"
          pivot="reporting_org_type_code"
          subPivot="reporting_org_type_name"
        />
      </Grid>
      {/** secondary publisher */}
      <Grid item xs={12} md={4} lg={4}>
        <ConnectedSelect
          {...fragmentConfig.secondaryReporter}
          options={fetchedSecondaryReporter}
          value={store.get('secondaryReporter')}
          onChange={(e) => store.set('secondaryReporter')(e)}
          placeholder="All options"
        />
      </Grid>
      {/** sector category */}
      <Grid item xs={12} md={12} lg={6}>
        <AsyncSelect
          {...fragmentConfig.sectorCategory}
          value={store.get('sectorCategories')}
          onChange={(e) => store.set('sectorCategories')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value
              : option.value
          }
          placeholder="All categories"
          pivot="sector_code"
          subPivot="sector_narrative"
        />
      </Grid>

      {/** sector vocabulary */}
      <Grid item xs={12} md={12} lg={6}>
        <AsyncSelect
          {...fragmentConfig.sectorVocabulary}
          value={store.get('sectorVocabularies')}
          onChange={(e) => store.set('sectorVocabularies')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
          placeholder="All vocabularies"
          pivot="sector_vocabulary"
        />
      </Grid>

      {/** sector */}
      <Grid item xs={12} md={12} lg={6}>
        <AsyncSelect
          {...fragmentConfig.sectorCategory}
          value={store.get('sectorCategories')}
          onChange={(e) => store.set('sectorCategories')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value
              : option.value
          }
          placeholder="All categories"
          pivot="sector_code"
          subPivot="sector_narrative"
        />
      </Grid>
      {/** recipient country */}
      <Grid item xs={12} md={12}>
        <AsyncSelect
          {...fragmentConfig.recipientCountry}
          value={store.get('countries')}
          onChange={(e) => store.set('countries')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value.charAt(0).toUpperCase() +
                option.pivot[0].value.slice(1)
              : option.value
          }
          placeholder="All countries"
          pivot="recipient_country_code"
          subPivot="recipient_country_name"
        />
      </Grid>
      {/** recipient region */}
      <Grid item xs={12} md={12} lg={12}>
        <AsyncSelect
          {...fragmentConfig.recipientRegion}
          value={store.get('regions')}
          onChange={(e) => store.set('regions')(e)}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) =>
            option.pivot && option.pivot[0]
              ? option.pivot[0].value
              : option.value
          }
          placeholder="All regions"
          pivot="recipient_region_code"
          subPivot="recipient_region_name"
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
      {/** empty grid here * */}
      <Grid item xs={12} md={4} lg={4} />
      {/** activity/budget  start date (to) */}
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
      {/** activity/budgegt end date (to) */}
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
