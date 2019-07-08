/* core */
import React, { useState, useEffect, useMemo } from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import { useEffectOnce } from 'react-use';
/* project component */
import MultiSelectChip from 'app/components/inputs/selects/MultiSelectChip';
import SimpleSelect from 'app/components/inputs/selects/SimpleSelect';
/* common */
// import { useStoreState } from 'app/state/appStore';
import { useStoreState } from 'app/state/store';
import { ModuleFragment } from 'app/modules/QueryBuilder/fragments/common';
/* config & mock */
import { fragmentConfig } from './config';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import { OrganisationModel } from 'app/state/models';

export const WhoFragment = () => {
  const fetchedOrganisationTypes = useStoreState(
    state => state.organisationTypes.data
  );
  const fetchedsectorCategories = useStoreState(
    state => state.sectorCategories.data
  );
  const fetchedsectorOrganisations = useStoreState(
    state => state.organisations.data
  );

  const store = ModuleStore.useStore();

  /*useEffectOnce(() => {
    console.log('Running effect once on mount');
    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });*/

  /*if (fetchedsectorOrganisations) {
    fetchedsectorOrganisations.map((item: OrganisationModel) => {
      console.log(item.organisation_identifier);

      if (item.name.narratives) {
        item.name.narratives.map(mod => {
          console.log('--------');
          console.log(mod.text);
          return mod;
        });
      }
      console.log('');
      console.log('');
      return item;
    });
  }*/

  return (
    <ModuleFragment
      name={fragmentConfig.name}
      description={fragmentConfig.name}
    >
      <Grid item xs={12} sm={6} md={12}>
        <MultiSelectChip
          label="Organisation type"
          helperTextLink="Code List"
          helperTextUrl="http://reference.iatistandard.org/203/codelists/OrganisationType/"
          placeholder="All (24)"
          className="organisationTypeSelect"
          name="organisationTypes"
          value={store.get('organisationTypes')}
          options={fetchedOrganisationTypes}
          onChange={e => store.set('organisationTypes')(e)}
          getOptionLabel={option => `${option.code}: ${option.name}`}
          getOptionValue={option => option.code}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={8}>
        <MultiSelectChip
          label="Organisation sector"
          helperText="E.g. AT-12 = Ministry of Interior."
          helperTextLink="See list"
          helperTextUrl="http://reference.iatistandard.org/203/codelists/Sector/"
          placeholder="All (24)"
          className="organisationSectorSelect"
          name="organisationSector"
          value={store.get('sectorCategories')}
          options={fetchedsectorCategories}
          onChange={e => store.set('sectorCategories')(e)}
          getOptionLabel={option => `${option.code}: ${option.name}`}
          getOptionValue={option => option.code}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {/*<SimpleSelect
          data={['Yes', 'No']}
          label="Include secondary reporters Y/N"
          tip="empty tooltip"
        />*/}
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <MultiSelectChip
          label="Organisation name"
          className="organisationNameSelect"
          name="organisations"
          helperText="E.g. AT-12 = Ministry of Interior. "
          helperTextLink="See list"
          helperTextUrl="http://reference.iatistandard.org/203/codelists/Sector/"
          placeholder="All (24)"
          value={store.get('organisations')}
          options={fetchedsectorOrganisations}
          onChange={e => store.set('organisations')(e)}
          getOptionLabel={(option: OrganisationModel) =>
            `${option.organisation_identifier}: ${option.name.narratives[0].text}`
          }
          getOptionValue={(option: OrganisationModel) =>
            option.organisation_identifier
          }
        />
      </Grid>
    </ModuleFragment>
  );
};
