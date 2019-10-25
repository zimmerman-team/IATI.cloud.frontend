/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import { AddFilterModule } from 'app/components/utils/Popover';
import { AsyncSelect } from 'app/components/inputs/selects/AsyncSelect';
/* utils */
import get from 'lodash/get';
import find from 'lodash/find';
import { useStoreState } from 'app/state/store';
import { additionalFiltersPopData } from 'app/modules/QueryBuilder/steps/additional-filters/common/FilterFragment/consts';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import IconTextInput from 'app/components/inputs/textinputs/IconTextInputFIeld';
import { Add } from '@material-ui/icons';
import { IconButton } from 'app/components/inputs/buttons/IconButton';
import { TextButton } from 'app/components/inputs/buttons/TextButton';
import { Link } from 'react-router-dom';

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
  const fetchedTransactionProviderOrgs = useStoreState(state =>
    get(
      state.transactionProviderOrgs.data,
      'facet_counts.facet_pivot.transaction_provider_org_narrative',
      []
    )
  );
  const fetchedTransactionReceiverOrgs = useStoreState(state =>
    get(
      state.transactionReceiverOrgs.data,
      'facet_counts.facet_pivot.transaction_receiver_org_narrative',
      []
    )
  );

  const addedFilterOptions = store.get('additionalFilters');

  const allAddFilters = [
    ...additionalFiltersPopData[0][1],
    // ...additionalFiltersPopData[1][1],
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
        <IconTextInput
          label="Search in title, activity or description"
          placeholder="Text search"
          onChange={setTextSearchValue}
          value={store.get('textSearch')}
          helperText="Have minimum 1-2 other filters selected to avoid searching the entire database"
        />

        {/* todo: keep it for now, but delete later */}
        {/*<TextField
          fullWidth
          autoFocus
          margin="normal"
          variant="outlined"
          placeholder="Text search"
          onChange={setTextSearchValue}
          value={store.get('textSearch')}
          label="Search in title, activity or description"
          helperText="Have minium 1-2 other filters selected to avoid searching the entire database"
        />*/}
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <AsyncSelect
          label="Transaction Provider Org"
          // options={fetchedTransactionProviderOrgs}
          value={store.get('transactionProviderOrgs')}
          onChange={e => store.set('transactionProviderOrgs')(e)}
          getOptionValue={option => option.value}
          getOptionLabel={option => option.value}
          placeholder="All transaction provider organisations"
          pivot="transaction_provider_org_ref"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <AsyncSelect
          label="Transaction Receiver Org"
          // options={fetchedTransactionReceiverOrgs}
          value={store.get('transactionReceiverOrgs')}
          onChange={e => store.set('transactionReceiverOrgs')(e)}
          getOptionValue={option => option.value}
          getOptionLabel={option => option.value}
          placeholder="All transaction receiver organisations"
          pivot="transaction_receiver_org_ref"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <AsyncSelect
          label="Participating Organisation"
          //options={fetchedParticipatingOrgs}
          value={store.get('participatingOrgs')}
          onChange={e => store.set('participatingOrgs')(e)}
          placeholder="All participating organisations"
          getOptionValue={option => option.value}
          getOptionLabel={option => option.value}
          pivot="participating_org_ref"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <AddFilterModule
          data={additionalFiltersPopData}
          onCheckChange={setAdditionFilters}
          addedFilterOptions={addedFilterOptions}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8} />
      {addedFilterOptions.map(addedFilter => {
        return find(allAddFilters, { label: addedFilter }).component({
          store,
        });
      })}

      <div
        css={`
          display: flex;
          justify-content: flex-end;
          width: 100%;
          margin-top: 50px;
        `}
      >
        <Grid item md={2}>
          <Link to="/querybuilder/output-format">
            <TextButton label="Next" />
          </Link>
        </Grid>
      </div>
    </Grid>
  );
};