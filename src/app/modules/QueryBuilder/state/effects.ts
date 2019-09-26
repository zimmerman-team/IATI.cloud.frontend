/* eslint-disable @typescript-eslint/camelcase */
import { StoreEffect } from './store';

import get from 'lodash/get';
import { baseURL } from 'app/state/api';
import { constructSolrQuery } from './utils';

import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel,
  CountryModel,
  RegionModel,
  ActivityStatusModel,
  ParticipatingOrgsModel,
  TransactionProviderOrgModel,
  SecondaryReporterModel,
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

    const secondaryReporter = store.get('secondaryReporter')
      ? store.get('secondaryReporter').map((item: SecondaryReporterModel) => {
          return item.code;
        })
      :null;

    const countries = store.get('countries')
      ? store.get('countries').map((item: CountryModel) => {
          return item.recipient_country.code;
        })
      : null;

    const regions = store.get('regions')
      ? store.get('regions').map((item: RegionModel) => {
          return item.recipient_region.code;
        })
      : null;

    const startDateAfter =
      store.get('mustHaveDates') === 'Yes'
        ? {
            startDateAfter:
              store.get('startDateAfter') !== ''
                ? `${store.get('startDateAfter')}T00:00:00Z`
                : '*',
            /*endDate:
              store.get('endDate') !== ''
                ? `${store.get('endDate')}T00:00:00Z`
                : '*',*/
          }
        : null;
    const startDateBefore =
      store.get('mustHaveDates') === 'Yes'
        ? {
          startDateBefore:
            store.get('startDateBefore') !== ''
              ? `${store.get(`startDateBefore`)}T00:00:00Z`
              : '*',
          }
        : null;
    const endDateAfter =
      store.get('mustHaveDates') === 'Yes'
        ? {
            endDateAfter:
              store.get('endDateAfter') !== ''
                ? `${store.get('endDateAfter')}T00:00:00Z`
                : '*',
          }
          : null;

    const endDateBefore =
      store.get('mustHaveDates') === 'Yes'
        ? {
            endDateBefore:
              store.get('endDateBefore') !== ''
                ? `${store.get('endDateBefore')}T00:00:00Z`
                : '*',
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
            return item.value.trim();
          })
      : null;

    const transactionReceiverOrgs = store.get('transactionReceiverOrgs')
      ? store
          .get('transactionReceiverOrgs')
          .map((item: TransactionProviderOrgModel) => {
            return item.value.trim();
          })
      : null;

    const participatingOrgs = store.get('participatingOrgs')
      ? store.get('participatingOrgs').map((item: ParticipatingOrgsModel) => {
          return item.value.trim();
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

    const aidTypeCategory =
      store.get('aidTypeCategory') && rowFormat === 'activity'
        ? store.get('aidTypeCategory').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const aidTypeVocabulary =
      store.get('aidTypeVocabulary') && rowFormat === 'activity'
        ? store.get('aidTypeVocabulary').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const collaborationType =
      store.get('collaborationType') && rowFormat === 'activity'
        ? store.get('collaborationType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const defaultCurrency =
      store.get('defaultCurrency') && rowFormat === 'activity'
        ? store.get('defaultCurrency').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const defaultFlowType =
      store.get('defaultFlowType') && rowFormat === 'activity'
        ? store.get('defaultFlowType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const hierarchy =
      store.get('hierarchy') && rowFormat === 'activity'
        ? store.get('hierarchy').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const financeType =
      store.get('financeType') && rowFormat === 'activity'
        ? store.get('financeType').map((item: ActivityStatusModel) => {
          return item.code;
        })
        : null;

    const tiedStatus =
      store.get('tiedStatus') && rowFormat === 'activity'
        ? store.get('tiedStatus').map((item: ActivityStatusModel) => {
          return item.code;
        })
        : null;
    const transactionType =
      store.get('transactionType') && rowFormat === 'activity'
        ? store.get('transactionType').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const documentLinkCategory =
      store.get('documentLinkCategory') && rowFormat === 'activity'
        ? store.get('documentLinkCategory').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const iatiVersion =
      store.get('iatiVersion') && rowFormat === 'activity'
        ? store.get('iatiVersion').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const language =
      store.get('language') && rowFormat === 'activity'
        ? store.get('language').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const transactionFlowType =
      store.get('transactionFlowType') && rowFormat === 'activity'
        ? store.get('transactionFlowType').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const transactionTiedStatus =
      store.get('transactionTiedStatus') && rowFormat === 'activity'
        ? store.get('transactionTiedStatus').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const transactionValueCurrency =
      store.get('transactionValueCurrency') && rowFormat === 'activity'
        ? store.get('transactionValueCurrency').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const humanitarian =
      store.get('humanitarian') && rowFormat === 'activity'
        ? store.get('humanitarian').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;
    const transactionHumanitarian =
      store.get('transactionHumanitarian') && rowFormat === 'activity'
        ? store.get('transactionHumanitarian').map((item: ActivityStatusModel) => {
          return item.code
        })
        : null;

    const otherIdentifierType =
      store.get('otherIdentifierType') && rowFormat === 'activity'
        ? store.get('otherIdentifierType').map((item: ActivityStatusModel) => {
          return item.code
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
          ? `reporting_org_ref:(${organisations && organisations.join(' ')})`
          : null,
        get(organisationTypes, 'length', 0)
          ? `reporting_org_type_code:(${organisationTypes &&
              organisationTypes.join(' ')})`
          : null,
        get(sectors, 'length', 0)
          ? `sector_code:(${sectors && sectors.join(' ')})`
          : null,
        get(secondaryReporter, 'length', 0)
          ? `reporting_org_secondary_reporter:(${secondaryReporter && secondaryReporter.join(' ')})`
          :null,
        get(countries, 'length', 0)
          ? `recipient_country_code:(${countries && countries.join(' ')})`
          : null,
        get(regions, 'length', 0)
          ? `recipient_region_code:(${regions && regions.join(' ')})`
          : null,
        startDateAfter !== null && startDateAfter.startDateAfter !== '*'
          ? `${
              rowFormat === 'activity'
                ? '(activity_date_start_planned'
                : '(transaction_date_start_planned'
            }:[${get(startDateAfter, 'startDateAfter', '*')} TO *] OR ${rowFormat === 'activity'
                        ? `activity_date_start_actual`
                        : `transaction_date_start_actual`}:[${get(startDateAfter, 'startDateAfter', '*')} TO *])`
          : null,
        startDateBefore !== null && startDateBefore.startDateBefore !== '*'

          ? `${
            rowFormat === 'activity'
              ? `(activity_date_start_planned`
              : `(transaction_date_start_planned`
          }:[* TO ${get(startDateBefore, 'startDateBefore', '*')}] OR ${rowFormat === 'activity'
                            ? `activity_date_start_actual`
                            : `transaction_date_start_actual`}:[* TO ${get(startDateBefore, 'startDateBefore', '*')}])`
          : null,
        endDateAfter !== null && endDateAfter.endDateAfter !== '*'
          ? `${
            rowFormat === 'activity'
              ? '(activity_date_end_planned'
              : '(transaction_date_end_planned'
          }:[${get(endDateAfter, 'endDateAfter', '*')} TO *] OR ${rowFormat === 'activity'
          ? `activity_date_end_actual`
          : `transaction_date_end_actual`}:[${get(endDateAfter, 'endDateAfter', '*')} TO *])`
          : null,

        endDateBefore !== null && endDateBefore.endDateBefore !== '*'

          ? `${
            rowFormat === 'activity'
              ? `(activity_date_end_planned`
              : `(transaction_date_end_planned`
          }:[* TO ${get(endDateBefore, 'endDateBefore', '*')}] OR ${rowFormat === 'activity'
          ? `activity_date_end_actual`
          : `transaction_date_end_actual`}:[* TO ${get(endDateBefore, 'endDateBefore', '*')}])`
          : null,

        textSearch
          ? `(title_narrative:"${textSearch}" OR description:"${textSearch}")`
          : null,
        get(transactionProviderOrgs, 'length', 0)
          ? `transaction_provider_org_ref:(${transactionProviderOrgs &&
              transactionProviderOrgs.join(' ')})`
          : null,
        get(transactionReceiverOrgs, 'length', 0)
          ? `transaction_receiver_org_ref:(${transactionReceiverOrgs &&
              transactionReceiverOrgs.join(' ')})`
          : null,
        get(participatingOrgs, 'length', 0)
          ? `participating_org_ref:(${participatingOrgs &&
              participatingOrgs.join(' ')})`
          : null,
        get(activityStatus, 'length', 0)
          ? `activity_status_code:(${activityStatus &&
              activityStatus.join(' ')})`
          : null,
        get(activityScope, 'length', 0)
          ? `activity_scope_code:(${activityScope && activityScope.join(' ')})`
          : null,
        get(aidType, 'length', 0)
          ? `default_aid_type_code:(${aidType && aidType.join(' ')})`
          : null,
        get(aidTypeCategory, 'length', 0)
          ? `default_aid_type_category_code:(${aidTypeCategory &&
              aidTypeCategory.join(' ')})`
          : null,
        get(aidTypeVocabulary, 'length', 0)
          ? `default_aid_type_vocabulary:(${aidTypeVocabulary &&
              aidTypeVocabulary.join(' ')})`
          : null,
        get(collaborationType, 'length', 0)
          ? `collaboration_type_code:(${collaborationType &&
              collaborationType.join(' ')})`
          : null,
        get(defaultCurrency, 'length', 0)
          ? `default_currency:(${defaultCurrency && defaultCurrency.join(' ')})`
          : null,
        get(defaultFlowType, 'length', 0)
          ? `default_flow_type_code:(${defaultFlowType &&
              defaultFlowType.join(' ')})`
          : null,
        get(hierarchy, 'length', 0)
          ? `hierarchy:(${hierarchy && hierarchy.join(' ')})`
          : null,
        get(financeType, 'length', 0)
          ? `default_finance_type_code:(${financeType && financeType.join(' ')})`
          : null,
        get(tiedStatus, 'length', 0)
          ? `default_tied_status_code:(${tiedStatus && tiedStatus.join(' ')})`
          : null,
        get(transactionType, 'length', 0)
          ? `transaction_type:(${transactionType && transactionType.join(' ')})`
          : null,
        get(documentLinkCategory, 'length', 0)
          ? `document_link_category_code:(${documentLinkCategory && documentLinkCategory.join(' ')})`
          : null,
        get(iatiVersion, 'length', 0)
          ? `dataset_iati_version:(${iatiVersion && iatiVersion.join(' ')})`
          : null,
        get(language, 'length', 0)
          ? `default_lang:(${language && language.join(' ')})`
          : null,
        get(transactionFlowType, 'length', 0)
          ? `transaction_flow_type_code:(${transactionFlowType && transactionFlowType.join(' ')})`
          : null,
        get(transactionTiedStatus, 'length', 0)
          ? `transaction_tied_status_code:(${transactionTiedStatus && transactionTiedStatus.join(' ')})`
          : null,
        get(transactionValueCurrency, 'length', 0)
          ? `transaction_value_currency:(${transactionValueCurrency && transactionValueCurrency.join(' ')})`
          : null,
        get(humanitarian, 'length', 0)
          ? `humanitarian:(${humanitarian && humanitarian.join(' ')})`
          : null,
        get(transactionHumanitarian, 'length', 0)
          ? `transaction_humanitarian:(${transactionHumanitarian && transactionHumanitarian.join(' ')})`
          : null,
        get(otherIdentifierType, 'length', 0)
          ? `other_identifier_type:(${otherIdentifierType && otherIdentifierType.join(' ')})`
          : null,
      ],
      get(fields, 'length', 0) ? `fl=${fields}` : null
    );

    // updates the app store
    appStore.getActions().query.updateQuery(surl);
  });

  return store;
};
