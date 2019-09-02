/* eslint-disable @typescript-eslint/camelcase */
import { formatUrl } from 'url-lib';

import { StoreEffect } from './store';

import get from 'lodash/get';

import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel,
  ActivityStatusModel,
} from 'app/state/models';

import appStore from 'app/state/store';

const baseURL =
  'https://test-datastore.iatistandard.org/api/activities/?format=json&fields=all&';
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

    const activityStatus = store.get('activityStatus')
      ? store.get('activityStatus').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const url = formatUrl(
      [baseURL],
      [
        // check if the object contain data, else return null
        get(organisations, 'length', 0)
          ? { reporting_organisation_identifier: organisations }
          : null,
        get(organisationTypes, 'length', 0)
          ? { 'reporting-org.type': organisationTypes }
          : null,
        get(sectorCategories, 'length', 0)
          ? { sector: sectorCategories }
          : null,
        get(activityStatus, 'length', 0)
          ? { activity_status: activityStatus }
          : null,
      ]
    );

    // updates the app store
    appStore.getActions().query.updateQuery(url);
  });

  return store;
};
