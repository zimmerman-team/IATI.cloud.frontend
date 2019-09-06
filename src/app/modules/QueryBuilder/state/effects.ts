/* eslint-disable @typescript-eslint/camelcase */
import { StoreEffect } from './store';

import get from 'lodash/get';
import { baseURL } from 'app/state/api';
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

export const withEffects: StoreEffect = store => {
  store.onAll().subscribe(() => {
    const rowFormat = store.get('rowFormat');

    const formattedBaseURL = baseURL.replace(
      'activity',
      store.get('rowFormat')
    );

    /* todo: too much repetition, refactor to be more efficient */
    const organisationTypes =
      store.get('organisationTypes') && rowFormat === 'activity'
        ? store.get('organisationTypes').map((item: OrganisationTypeModel) => {
            return item.code;
          })
        : null;

    const sectors =
      (store.get('sectors') || store.get('sectorCategories')) &&
      rowFormat === 'activity'
        ? (store.get('sectors') || [])
            .concat(store.get('sectorCategories') || [])
            .map((item: SectorModel) => {
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

    const textSearch =
      store.get('textSearch') && rowFormat === 'activity'
        ? store.get('textSearch')
        : null;

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

    const activityStatus =
      store.get('activityStatus') && rowFormat === 'activity'
        ? store.get('activityStatus').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const activityScope =
      store.get('activityScope') && rowFormat === 'activity'
        ? store.get('activityScope').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const aidType =
      store.get('aidType') && rowFormat === 'activity'
        ? store.get('aidType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const aidTypeVocabulary =
      store.get('aidTypeVocabulary') && rowFormat === 'activity'
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
      formattedBaseURL,
      [
        get(organisations, 'length', 0)
          ? `reporting_org_ref:${organisations}`
          : null,
        get(organisationTypes, 'length', 0)
          ? `reporting_org_type_code:${organisationTypes}`
          : null,
        get(sectors, 'length', 0) ? `sector_code:${sectors}` : null,
        get(countries, 'length', 0)
          ? `recipient_country_code:${countries}`
          : null,
        get(regions, 'length', 0) ? `recipient_region_code:${regions}` : null,
        dates
          ? `${
              rowFormat === 'activity'
                ? 'activity_date_iso_date'
                : 'transaction_date_iso_date'
            }:[${get(dates, 'startDate', '*')}T00:00:00Z TO ${get(
              dates,
              'endDate',
              '*'
            )}T00:00:00Z]`
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

    // updates the app store
    appStore.getActions().query.updateQuery(surl);
  });

  return store;
};
