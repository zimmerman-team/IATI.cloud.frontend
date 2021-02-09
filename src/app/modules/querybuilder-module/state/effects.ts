//cc:query builder module#; query builder state; effects
import { StoreEffect } from './store';

import get from 'lodash/get';
import { baseURL } from 'app/state/api';
import { constructSolrQuery } from './utils';

import {
  ActivityStatusModel,
  CountryModel,
  OrganisationModel,
  OrganisationTypeModel,
  ParticipatingOrgsModel,
  RegionModel,
  SecondaryReporterModel,
  SectorModel,
  SectorVocabularyModel,
  TransactionProviderOrgModel,
} from 'app/state/models';

import appStore from 'app/state/store';
import { getSectors } from './utils/getSectors';
import { getReportingOrgTypes } from './utils/getReportingOrgTypes';
import { getSectorVocabs } from './utils/getSectorVocabs';
import { getCountries } from './utils/getCountries';
import { getRegions } from './utils/getRegions';
import { getGeneralSearch } from './utils/getGeneralSearch';
import { getParticipatingOrgs } from './utils/getParticipatingOrgs';
import { getHumanitarian } from './utils/getHumanitarian';
import { getAidTypeCodes } from './utils/getAidTypeCodes';
import { getDefaultCurrency } from './utils/getDefaultCurrency';
import { getDefaultFlowType } from './utils/getDefaultFlowType';
import { getDefaultFinanceType } from './utils/getDefaultFinanceType';
import { getDefaultTiedStatus } from './utils/getDefaultTiedStatus';

/*
const withLocalStorage: StoreEffect = store => {
  // Listen on all changes to the store.
  store
    .onAll()
    .subscribe(({ key, value, previousValue }) =>
      console.log(key, 'changed from', previousValue, 'to', value)
    );
};
*/

export const withEffects: StoreEffect = (store) => {
  store.onAll().subscribe(() => {
    const rowFormat = store.get('rowFormat');

    const formattedBaseURL = baseURL.replace(
      'activity',
      store.get('rowFormat')
    );

    const repeatRows = store.get('repeatRows') !== '0';

    /* todo: too much repetition, refactor to be more efficient */
    const organisationTypes = store.get('organisationTypes')
      ? store.get('organisationTypes').map((item: OrganisationTypeModel) => {
          return item.code;
        })
      : null;

    const sectors =
      store.get('sectors') || store.get('sectorCategories')
        ? (store.get('sectors') || [])
            .concat(store.get('sectorCategories') || [])
            .map((item: SectorModel) => {
              return item.code;
            })
        : null;
    const sectorVocabularies = store.get('sectorVocabularies')
      ? (store.get('sectorVocabularies') || []).map(
          (item: SectorVocabularyModel) => {
            return item.code;
          }
        )
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
      : null;

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
      store.get('mustHaveDates') === 'Yes' &&
      (rowFormat === 'activity' || rowFormat === 'budget')
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
      store.get('mustHaveDates') === 'Yes' &&
      (rowFormat === 'activity' || rowFormat === 'budget')
        ? {
            startDateBefore:
              store.get('startDateBefore') !== ''
                ? `${store.get(`startDateBefore`)}T00:00:00Z`
                : '*',
          }
        : null;
    const endDateAfter =
      store.get('mustHaveDates') === 'Yes' &&
      (rowFormat === 'activity' || rowFormat === 'budget')
        ? {
            endDateAfter:
              store.get('endDateAfter') !== ''
                ? `${store.get('endDateAfter')}T00:00:00Z`
                : '*',
          }
        : null;

    const endDateBefore =
      store.get('mustHaveDates') === 'Yes' &&
      (rowFormat === 'activity' || rowFormat === 'budget')
        ? {
            endDateBefore:
              store.get('endDateBefore') !== ''
                ? `${store.get('endDateBefore')}T00:00:00Z`
                : '*',
          }
        : null;

    const textSearch = store.get('textSearch') ? store.get('textSearch') : null;

    const transactionProviderOrgs =
      store.get('transactionProviderOrgs') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store
            .get('transactionProviderOrgs')
            .map((item: TransactionProviderOrgModel) => {
              return item.value.trim();
            })
        : null;

    const transactionReceiverOrgs =
      store.get('transactionReceiverOrgs') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store
            .get('transactionReceiverOrgs')
            .map((item: TransactionProviderOrgModel) => {
              return item.value.trim();
            })
        : null;

    const participatingOrgs = store.get('participatingOrgs')
      ? store.get('participatingOrgs').map((item: ParticipatingOrgsModel) => {
          return item.value.trim().replace(/#/g, '%23');
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

    const aidTypeCategory = store.get('aidTypeCategory')
      ? store.get('aidTypeCategory').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const aidTypeVocabulary = store.get('aidTypeVocabulary')
      ? store.get('aidTypeVocabulary').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const collaborationType = store.get('collaborationType')
      ? store.get('collaborationType').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const defaultCurrency = store.get('defaultCurrency')
      ? store.get('defaultCurrency').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const policyMarker = store.get('policyMarker')
      ? store.get('policyMarker').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const tag = store.get('tag')
      ? store.get('tag').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const tagVocabulary = store.get('tagVocabulary')
      ? store.get('tagVocabulary').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const defaultFlowType = store.get('defaultFlowType')
      ? store.get('defaultFlowType').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const hierarchy = store.get('hierarchy')
      ? store.get('hierarchy').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const financeType = store.get('financeType')
      ? store.get('financeType').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const tiedStatus = store.get('tiedStatus')
      ? store.get('tiedStatus').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const transactionType =
      store.get('transactionType') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store.get('transactionType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const documentLinkCategory = store.get('documentLinkCategory')
      ? store.get('documentLinkCategory').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const iatiVersion = store.get('iatiVersion')
      ? store.get('iatiVersion').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const language = store.get('language')
      ? store.get('language').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const transactionFlowType =
      store.get('transactionFlowType') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store.get('transactionFlowType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const transactionTiedStatus =
      store.get('transactionTiedStatus') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store
            .get('transactionTiedStatus')
            .map((item: ActivityStatusModel) => {
              return item.code;
            })
        : null;
    const transactionValueCurrency =
      store.get('transactionValueCurrency') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store
            .get('transactionValueCurrency')
            .map((item: ActivityStatusModel) => {
              return item.code;
            })
        : null;
    const humanitarian = store.get('humanitarian')
      ? store.get('humanitarian').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const humanitarianScope = store.get('humanitarianScope')
      ? store.get('humanitarianScope').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const humanitarianScopeVocab = store.get('humanitarianScopeVocab')
      ? store.get('humanitarianScopeVocab').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const transactionHumanitarian =
      store.get('transactionHumanitarian') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store
            .get('transactionHumanitarian')
            .map((item: ActivityStatusModel) => {
              return item.code;
            })
        : null;

    const otherIdentifierType = store.get('otherIdentifierType')
      ? store.get('otherIdentifierType').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;

    const fields = store.get('fields')
      ? store.get('fields').map((item: ActivityStatusModel) => {
          return item.code;
        })
      : null;
    const modifiedFields = (): string[] | null => {
      if (fields !== null) {
        if (fields.includes('transaction_value')) {
          fields.push('transaction_value_currency');
        }
        fields.forEach((item, i) => {
          switch (item) {
            case 'reporting_org':
              fields[i] = 'reporting_org_*';
              break;

            case 'title':
              fields[i] = 'title_narrative,title_narrative_lang,title_xml';
              break;

            case 'description':
              fields[i] = 'description_*';
              break;

            case 'description_narrative':
              fields[i] = 'description_narrative_*';
              break;

            case 'participating_org':
              fields[i] = 'participating_org_*';
              break;

            case 'other_identifier':
              fields[i] = 'other_identifier_*';
              break;

            case 'activity_date':
              fields[i] = 'activity_date_*';
              break;

            case 'contact_info':
              fields[i] = 'contact_info_*';
              break;

            case 'recipient_country':
              fields[i] = 'recipient_country_*';
              break;

            case 'recipient_region':
              fields[i] = 'recipient_region_*';
              break;

            case 'location':
              fields[i] = 'location_*';
              break;

            case 'sector':
              fields[i] = 'sector_*';
              break;

            case 'tag':
              fields[i] = 'tag_*';
              break;

            case 'country_budget_items':
              fields[i] = 'country_budget_items_*';
              break;

            case 'humanitarian_scope':
              fields[i] = 'humanitarian_scope_*';
              break;

            case 'policy_marker':
              fields[i] = 'policy_marker_*';
              break;

            case 'default_aid_type':
              fields[i] = 'default_aid_type_*';
              break;

            case 'budget':
              fields[i] = 'budget_*';
              break;

            case 'planned_disbursement':
              fields[i] = 'planned_disbursement_*';
              break;

            case 'transaction':
              fields[i] = 'transaction_*';
              break;

            case 'document_link':
              fields[i] = 'document_link_*';
              break;

            case 'related_activity':
              fields[i] = 'related_activity_*';
              break;

            case 'legacy_data':
              fields[i] = 'legacy_data_*';
              break;

            case 'conditions':
              fields[i] = 'conditions_*';
              break;

            case 'result_document_link':
              fields[i] = 'result_document_link_*';
              break;

            case 'result_reference':
              fields[i] = 'result_reference_*';
              break;

            case 'result_indicator':
              fields[i] = 'result_indicator_*';
              break;

            case 'result_indicator_reference':
              fields[i] = 'result_indicator_reference_*';
              break;

            case 'result_indicator_baseline_document_link_title':
              fields[i] = 'result_indicator_baseline_document_link_title_*';
              break;

            case 'result_indicator_baseline_document_link_description':
              fields[i] =
                'result_indicator_baseline_document_link_description_*';
              break;

            case 'fss':
              fields[i] = 'fss_*';
              break;

            case 'crs_add':
              fields[i] = 'crs_*';
              break;
          }
        });
      }
      return fields;
    };

    const paramArr = [
      get(organisations, 'length', 0)
        ? `reporting_org_ref:(${organisations && organisations.join(' ')})`
        : null,
      getReportingOrgTypes(organisationTypes, rowFormat),
      getSectors(sectors, rowFormat),
      getSectorVocabs(sectorVocabularies, rowFormat),
      get(secondaryReporter, 'length', 0)
        ? `reporting_org_secondary_reporter:(${
            secondaryReporter && secondaryReporter.join(' ')
          })`
        : null,
      getCountries(countries, rowFormat),
      getRegions(regions, rowFormat),
      startDateAfter !== null &&
      startDateAfter.startDateAfter !== '*' &&
      rowFormat === 'activity'
        ? `(activity_date_start_actual_f:[${get(
            startDateAfter,
            'startDateAfter',
            '*'
          )} TO *] OR (-activity_date_start_actual_f:[* TO *]
            AND activity_date_start_planned_f:[${get(
              startDateAfter,
              'startDateAfter',
              '*'
            )} TO *]))`
        : null,

      startDateAfter !== null &&
      startDateAfter.startDateAfter !== '*' &&
      rowFormat === 'budget'
        ? `budget_period_start_iso_date_f:[${get(
            startDateAfter,
            'startDateAfter',
            '*'
          )} TO *]`
        : null,

      startDateBefore !== null &&
      startDateBefore.startDateBefore !== '*' &&
      rowFormat === 'activity'
        ? `(activity_date_start_actual_f:[* TO ${get(
            startDateBefore,
            'startDateBefore',
            '*'
          )}] OR (-activity_date_start_actual_f:[* TO *]
            AND activity_date_start_planned_f:[* TO ${get(
              startDateBefore,
              'startDateBefore',
              '*'
            )}]))`
        : null,

      startDateBefore !== null &&
      startDateBefore.startDateBefore !== '*' &&
      rowFormat === 'budget'
        ? `budget_period_start_iso_date_f:[* TO ${get(
            startDateBefore,
            'startDateBefore',
            '*'
          )}]`
        : null,

      endDateAfter !== null &&
      endDateAfter.endDateAfter !== '*' &&
      rowFormat === 'activity'
        ? `(activity_date_end_actual_f:[${get(
            endDateAfter,
            'endDateAfter',
            '*'
          )} TO *] OR (-activity_date_end_actual_f:[* TO *]
             AND activity_date_end_planned_f:[${get(
               endDateAfter,
               'endDateAfter',
               '*'
             )} TO *]))`
        : null,

      endDateAfter !== null &&
      endDateAfter.endDateAfter !== '*' &&
      rowFormat === 'budget'
        ? `budget_period_end_iso_date_f:[${get(
            endDateAfter,
            'endDateAfter',
            '*'
          )} TO *]`
        : null,

      endDateBefore !== null &&
      endDateBefore.endDateBefore !== '*' &&
      rowFormat === 'activity'
        ? `(activity_date_end_actual_f:[* TO ${get(
            endDateBefore,
            'endDateBefore',
            '*'
          )}] OR (-activity_date_end_actual_f: [* TO *]
              AND activity_date_end_planned_f:[* TO ${get(
                endDateBefore,
                'endDateBefore',
                '*'
              )}]))`
        : null,

      endDateBefore !== null &&
      endDateBefore.endDateBefore !== '*' &&
      rowFormat === 'budget'
        ? `budget_period_end_iso_date_f:[* TO ${get(
            endDateBefore,
            'endDateBefore',
            '*'
          )}]`
        : null,

      getGeneralSearch(textSearch, rowFormat),

      get(transactionProviderOrgs, 'length', 0)
        ? `transaction_provider_org_ref:(${
            transactionProviderOrgs && transactionProviderOrgs.join(' ')
          })`
        : null,
      get(transactionReceiverOrgs, 'length', 0)
        ? `transaction_receiver_org_ref:(${
            transactionReceiverOrgs && transactionReceiverOrgs.join(' ')
          })`
        : null,

      getParticipatingOrgs(participatingOrgs, rowFormat),
      get(activityStatus, 'length', 0)
        ? `activity_status_code:(${activityStatus && activityStatus.join(' ')})`
        : null,
      get(activityScope, 'length', 0)
        ? `activity_scope_code:(${activityScope && activityScope.join(' ')})`
        : null,
      getAidTypeCodes(aidType, rowFormat),
      get(aidTypeCategory, 'length', 0)
        ? `default_aid_type_category_code:(${
            aidTypeCategory && aidTypeCategory.join(' ')
          })`
        : null,
      get(aidTypeVocabulary, 'length', 0)
        ? `default_aid_type_vocabulary:(${
            aidTypeVocabulary && aidTypeVocabulary.join(' ')
          })`
        : null,
      get(collaborationType, 'length', 0)
        ? `collaboration_type_code:(${
            collaborationType && collaborationType.join(' ')
          })`
        : null,
      getDefaultCurrency(defaultCurrency, rowFormat),
      getDefaultFlowType(defaultFlowType, rowFormat),
      get(hierarchy, 'length', 0)
        ? `hierarchy:(${hierarchy && hierarchy.join(' ')})`
        : null,
      getDefaultFinanceType(financeType, rowFormat),
      getDefaultTiedStatus(tiedStatus, rowFormat),
      get(transactionType, 'length', 0)
        ? `transaction_type:(${transactionType && transactionType.join(' ')})`
        : null,
      get(documentLinkCategory, 'length', 0)
        ? `document_link_category_code:(${
            documentLinkCategory && documentLinkCategory.join(' ')
          })`
        : null,
      get(iatiVersion, 'length', 0)
        ? `dataset_iati_version:(${iatiVersion && iatiVersion.join(' ')})`
        : null,
      get(language, 'length', 0)
        ? `default_lang:(${language && language.join(' ')})`
        : null,
      get(transactionFlowType, 'length', 0)
        ? `transaction_flow_type_code:(${
            transactionFlowType && transactionFlowType.join(' ')
          })`
        : null,
      get(transactionTiedStatus, 'length', 0)
        ? `transaction_tied_status_code:(${
            transactionTiedStatus && transactionTiedStatus.join(' ')
          })`
        : null,
      get(transactionValueCurrency, 'length', 0)
        ? `transaction_value_currency:(${
            transactionValueCurrency && transactionValueCurrency.join(' ')
          })`
        : null,
      getHumanitarian(humanitarian, rowFormat),
      get(humanitarianScope, 'length', 0)
        ? `humanitarian_scope_type:(${
            humanitarianScope && humanitarianScope.join(' ')
          })`
        : null,
      get(humanitarianScopeVocab, 'length', 0)
        ? `humanitarian_scope_vocabulary:(${
            humanitarianScopeVocab && humanitarianScopeVocab.join(' ')
          })`
        : null,
      get(transactionHumanitarian, 'length', 0)
        ? `transaction_humanitarian:(${
            transactionHumanitarian && transactionHumanitarian.join(' ')
          })`
        : null,
      get(otherIdentifierType, 'length', 0)
        ? `other_identifier_type:(${
            otherIdentifierType && otherIdentifierType.join(' ')
          })`
        : null,
      get(policyMarker, 'length', 0)
        ? `policy_marker_code:(${policyMarker && policyMarker.join(' ')})`
        : null,
      get(tag, 'length', 0) ? `tag_code:(${tag && tag.join(' ')})` : null,
      get(tagVocabulary, 'length', 0)
        ? `tag_vocabulary:(${tagVocabulary && tagVocabulary.join(' ')})`
        : null,
    ];

    const surl = constructSolrQuery(
      formattedBaseURL,
      paramArr,
      get(modifiedFields(), 'length', 0) ? `fl=${fields}` : null
    );

    // updates the app store
    appStore.getActions().query.updateQuery(surl);
  });

  return store;
};
