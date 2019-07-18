import { formatUrl } from 'url-lib';

import { StoreEffect } from './store';

import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel,
} from 'app/state/models';

import appStore from 'app/state/store';

const baseURL = 'http://preview.iatistandard.org/index.php?url=';
/*

fields:
- reporting-org
- reporting-org.type
- sector
- recipient-country
- recipient-region
- start-date__lt
- start-date__gt
- end-date__lt
- end-date__gt
- transaction_provider-org
- participating-org

 */
export const withEffects: StoreEffect = store => {
  store.onAll().subscribe(() => {
    // localStorage.setItem(key, JSON.stringify(value));

    /* todo: too much repetition, refactor to be more efficient */
    const organisationTypes = store.get('organisationTypes')
      ? store.get('organisationTypes').map((item: OrganisationTypeModel) => {
          return item.code;
        })
      : null;

    const sectorCategories = store.get('sectorCategories')
      ? store.get('sectorCategories').map((item: SectorModel) => {
          return item.code;
        })
      : null;

    const organisations = store.get('organisations')
      ? store.get('organisations').map((item: OrganisationModel) => {
          return item.organisation_identifier;
        })
      : null;

    const url = formatUrl(
      [baseURL],
      [
        // check if the object contain data, else return null
        organisations ? { 'reporting-org': organisations } : null,
        organisationTypes ? { 'reporting-org.type': organisationTypes } : null,
        sectorCategories ? { sector: sectorCategories } : null,
      ]
    );

    // updates the app store
    appStore.getActions().query.updateQuery(url);
  });

  return store;
};
