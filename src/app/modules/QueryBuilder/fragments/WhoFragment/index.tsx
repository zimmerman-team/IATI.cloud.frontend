/* core */
/* third-party */
import Grid from '@material-ui/core/Grid';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
/* config & mock */
import { fragmentConfig } from 'app/modules/QueryBuilder/steps/organisation/model';
/* common */
import { useStoreState } from 'app/state/store';
import React from 'react';

export const WhoFragment = () => {
  const store = ModuleStore.useStore();

  /* getting the fetched datat from the app store */
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
      {/* this contains the organisation types dropdown */}
      <Grid item xs={12} sm={6} md={12}>
        <ConnectedSelect
          {...fragmentConfig.organisationTypes}
          options={fetchedOrganisationTypes}
          value={store.get('organisationTypes')}
          onChange={e => store.set('organisationTypes')(e)}
        />
      </Grid>

      {/* this contains the organisation sectors */}
      <Grid item xs={12} sm={6} md={8}>
        <ConnectedSelect
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

      {/* this contains the organisation sectors */}
      <Grid item xs={12} sm={6} md={12}>
        <ConnectedSelect
          {...fragmentConfig.organisations}
          value={store.get('organisations')}
          options={fetchedsectorOrganisations}
          onChange={e => store.set('organisations')(e)}
        />
      </Grid>
    </Grid>
  );
};
