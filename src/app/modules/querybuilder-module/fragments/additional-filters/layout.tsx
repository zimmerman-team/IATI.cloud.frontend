// @ts-nocheck
//cc:query builder module fragments#; query builder fragments - additional filters;fragment layout and logic
/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import { AddFilterModule } from 'app/components/utils/Popover';
import { AsyncSelect } from 'app/components/inputs/selects/AsyncSelect';
/* utils */
import find from 'lodash/find';
import { additionalFiltersPopData } from 'app/modules/querybuilder-module/fragments/additional-filters/consts';
import { ModuleStore } from 'app/modules/querybuilder-module/state/store';

import { QbStepNavigatorButton } from 'app/modules/querybuilder-module/common/QbStepNavigatorButton';
import { QbStepNavigator } from 'app/modules/querybuilder-module/common/QbStepNavigator';
import { FormResetButton } from 'app/modules/querybuilder-module/common/FormResetButton';

export const FilterFragment = () => {
  const store = ModuleStore.useStore();
  const setAdditionFilters = (e) => {
    store.set('additionalFilters')(e);
  };

  const addedFilterOptions = store.get('additionalFilters');

  const allAddFilters = [
    ...additionalFiltersPopData[0][1],
    ...additionalFiltersPopData[1][1],
  ];

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      direction="column"
    >
      <Grid item lg={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <AsyncSelect
              label="Transaction Provider Org"
              value={store.get('transactionProviderOrgs')}
              onChange={(e) => store.set('transactionProviderOrgs')(e)}
              getOptionValue={(option) => option.value}
              getOptionLabel={(option) => option.value}
              placeholder="All transaction provider organisations"
              pivot="transaction_provider_org_ref"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <AsyncSelect
              label="Transaction Receiver Org"
              value={store.get('transactionReceiverOrgs')}
              onChange={(e) => store.set('transactionReceiverOrgs')(e)}
              getOptionValue={(option) => option.value}
              getOptionLabel={(option) => option.value}
              placeholder="All transaction receiver organisations"
              pivot="transaction_receiver_org_ref"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <AsyncSelect
          label="Participating Organisation"
          value={store.get('participatingOrgs')}
          onChange={(e) => store.set('participatingOrgs')(e)}
          placeholder="All participating organisations"
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.value}
          pivot="participating_org_ref"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4}>
        <AddFilterModule
          data={additionalFiltersPopData}
          onCheckChange={setAdditionFilters}
          addedFilterOptions={addedFilterOptions}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} />
      {addedFilterOptions.map((addedFilter) => {
        return find(allAddFilters, { label: addedFilter }).component({
          store,
        });
      })}

      <QbStepNavigator>
        <QbStepNavigatorButton label="Back" path="/querybuilder/core-filters" />

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
            path="/querybuilder/output-format"
          />
        </Grid>
      </QbStepNavigator>
    </Grid>
  );
};
