/* eslint-disable @typescript-eslint/camelcase */
import { formatUrl } from 'url-lib';

import { StoreEffect } from './store';

import get from 'lodash/get';
import { constructSolrQuery } from './utils';

import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel,
  ActivityStatusModel,
  ParticipatingOrgsModel,
  TransactionProviderOrgModel,
} from 'app/state/models';

import appStore from 'app/state/store';

let baseURL =
  'https://test-datastore.iatistandard.org/search/activity/select?q=*:*&wt=json&rows=1000000';

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

    baseURL = `https://test-datastore.iatistandard.org/search/${store.get(
      'rowFormat'
    )}/select?`;

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

    const sectors = store.get('sectors')
      ? store.get('sectors').map((item: SectorModel) => {
          return item.code;
        })
      : null;

    const organisations = store.get('organisations')
      ? store.get('organisations').map((item: OrganisationModel) => {
          return item.reporting_organisation_identifier;
        })
      : null;

    const countries = store.get('countries')
      ? store.get('countries').map((item: SectorModel) => {
          return item.code;
        })
      : null;

    const regions = store.get('regions')
      ? store.get('regions').map((item: SectorModel) => {
          return item.code;
        })
      : null;

    const dates =
      store.get('mustHaveDates') === 'Yes'
        ? {
            startDate: store.get('startDate'),
            endDate: store.get('endDate'),
          }
        : null;

    const textSearch = store.get('textSearch') ? store.get('textSearch') : null;

    const transactionProviderOrgs = store.get('transactionProviderOrgs')
      ? store
          .get('transactionProviderOrgs')
          .map((item: TransactionProviderOrgModel) => {
            return `"${item.value}"`;
          })
      : null;

    const transactionReceiverOrgs = store.get('transactionReceiverOrgs')
      ? store
          .get('transactionReceiverOrgs')
          .map((item: TransactionProviderOrgModel) => {
            return `"${item.value}"`;
          })
      : null;

    const participatingOrgs = store.get('participatingOrgs')
      ? store.get('participatingOrgs').map((item: ParticipatingOrgsModel) => {
          return item.participating_organisation_ref;
        })
      : null;

    const activityStatus = store.get('activityStatus')
      ? store.get('activityStatus').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const activityScope = store.get('activityScope')
      ? store.get('activityScope').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const aidType = store.get('aidType')
      ? store.get('aidType').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const aidTypeVocabulary = store.get('aidTypeVocabulary')
      ? store.get('aidTypeVocabulary').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const fields = store.get('fields')
      ? store.get('fields').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const surl = constructSolrQuery(
      baseURL,
      [
        get(organisations, 'length', 0)
          ? `reporting_org_ref:${organisations}`
          : null,
        get(organisationTypes, 'length', 0)
          ? `reporting_org_type_code:${organisationTypes}`
          : null,
        get(sectorCategories, 'length', 0) || get(sectors, 'length', 0)
          ? `sector_code:${sectorCategories || ''}${
              sectors
                ? `${get(sectorCategories, 'length', 0) ? ',' : ''}${sectors}`
                : ''
            }`
          : null,
        get(countries, 'length', 0)
          ? `recipient_country_code:${countries}`
          : null,
        get(regions, 'length', 0) ? `recipient_region_code:${regions}` : null,
        dates
          ? `activity_date_iso_date:[${get(
              dates,
              'startDate',
              '*'
            )}T00:00:00Z TO ${get(dates, 'endDate', '*')}T00:00:00Z]`
          : null,
        textSearch
          ? `title_narrative:${textSearch} AND description:${textSearch}`
          : null,
        get(transactionProviderOrgs, 'length', 0)
          ? `transaction_provider_org_narrative:(${transactionProviderOrgs})`
          : null,
        get(transactionReceiverOrgs, 'length', 0)
          ? `transaction_receiver_org_narrative:(${transactionReceiverOrgs})`
          : null,
        get(participatingOrgs, 'length', 0)
          ? `participating_org_ref:${participatingOrgs}`
          : null,
        get(activityStatus, 'length', 0)
          ? `activity_status_code:${activityStatus}`
          : null,
        get(activityScope, 'length', 0)
          ? `activity_scope_code:${activityScope}`
          : null,
        get(aidType, 'length', 0) ? `default_aid_type_code:${aidType}` : null,
        get(aidTypeVocabulary, 'length', 0)
          ? `default_aid_type_vocabulary:${aidTypeVocabulary}`
          : null,
      ],
      get(fields, 'length', 0) ? `fl=${fields}` : null
    );

    // const url = formatUrl(
    //   [baseURL],
    //   [
    //     // check if the object contain data, else return null
    //     get(organisations, 'length', 0)
    //       ? { reporting_organisation_identifier: organisations }
    //       : null,
    //     get(organisationTypes, 'length', 0)
    //       ? { reporting_organisation_type: organisationTypes }
    //       : null,
    //     get(sectorCategories, 'length', 0)
    //       ? { sector_category: sectorCategories }
    //       : null,
    //     get(sectors, 'length', 0) ? { sector: sectors } : null,
    //     get(countries, 'length', 0) ? { recipient_country: countries } : null,
    //     get(regions, 'length', 0) ? { recipient_region: regions } : null,
    //     dates && dates.startDate
    //       ? { planned_start_date_gte: dates.startDate }
    //       : null,
    //     dates && dates.endDate ? { planned_end_date_gte: dates.endDate } : null,
    //     textSearch ? { q: textSearch } : null,
    //     get(participatingOrgs, 'length', 0)
    //       ? { participating_organisation: participatingOrgs }
    //       : null,
    //     get(activityStatus, 'length', 0)
    //       ? { activity_status: activityStatus }
    //       : null,
    //     get(activityScope, 'length', 0)
    //       ? { activity_scope: activityScope }
    //       : null,
    //     get(aidType, 'length', 0) ? { aid_type: aidType } : null,
    //     get(aidTypeCategory, 'length', 0)
    //       ? { aid_type: aidTypeCategory }
    //       : null,
    //     get(fields, 'length', 0) ? { fields: fields } : null,
    //   ]
    // );

    // updates the app store
    appStore.getActions().query.updateQuery(surl);
  });

  return store;
};
