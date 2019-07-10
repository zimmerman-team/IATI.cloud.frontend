/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
/* project component */
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
/* common */
import { useStoreState } from 'app/state/store';
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */
import { fragmentConfig } from './model';
import { ConnectedSelect } from 'app/components/inputs/selects/ConnectedSelect';

export const WhoFragment = ({ store }) => {
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
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.description}
    >
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
    </ModuleFragment>
  );
};
