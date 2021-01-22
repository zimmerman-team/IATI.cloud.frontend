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

    const regions =
      store.get('regions') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
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

    const textSearch =
      store.get('textSearch') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store.get('textSearch')
        : null;

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

    const participatingOrgs =
      store.get('participatingOrgs') && rowFormat === 'activity'
        ? store.get('participatingOrgs').map((item: ParticipatingOrgsModel) => {
            return item.value.trim();
          })
        : null;
    if (participatingOrgs != null) {
      /* todo: why are we using a for loop */
      for (let i = 0; i < participatingOrgs.length; i++) {
        if (participatingOrgs[i].includes('#')) {
          participatingOrgs[i] = participatingOrgs[i].replace(/#/g, '%23');
        }
      }
    }

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

    const policyMarker =
      store.get('policyMarker') && rowFormat === 'activity'
        ? store.get('policyMarker').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const tag =
      store.get('tag') && rowFormat === 'activity'
        ? store.get('tag').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;

    const tagVocabulary =
      store.get('tagVocabulary') && rowFormat === 'activity'
        ? store.get('tagVocabulary').map((item: ActivityStatusModel) => {
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
      store.get('transactionType') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
        ? store.get('transactionType').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const documentLinkCategory =
      store.get('documentLinkCategory') && rowFormat === 'activity'
        ? store.get('documentLinkCategory').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const iatiVersion =
      store.get('iatiVersion') && rowFormat === 'activity'
        ? store.get('iatiVersion').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const language =
      store.get('language') && rowFormat === 'activity'
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
    const humanitarian =
      store.get('humanitarian') && rowFormat === 'activity'
        ? store.get('humanitarian').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const humanitarianScope =
      store.get('humanitarianScope') && rowFormat === 'activity'
        ? store.get('humanitarianScope').map((item: ActivityStatusModel) => {
            return item.code;
          })
        : null;
    const humanitarianScopeVocab =
      store.get('humanitarianScopeVocab') && rowFormat === 'activity'
        ? store
            .get('humanitarianScopeVocab')
            .map((item: ActivityStatusModel) => {
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

    const otherIdentifierType =
      store.get('otherIdentifierType') &&
      (rowFormat === 'activity' || rowFormat === 'transaction')
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
    let temp_string;
    let output;

    const paramArr = [
      get(organisations, 'length', 0)
        ? `reporting_org_ref:(${organisations && organisations.join(' ')})`
        : null,
      get(organisationTypes, 'length', 0) && rowFormat === 'activity'
        ? `reporting_org_type_code:(${
            organisationTypes && organisationTypes.join(' ')
          })`
        : null,
      get(organisationTypes, 'length', 0) &&
      (rowFormat === 'transaction' || rowFormat === 'budget')
        ? `reporting_org_type:(${
            organisationTypes && organisationTypes.join(' ')
          })`
        : null,
      get(sectors, 'length', 0) && rowFormat === 'activity'
        ? ((temp_string = sectors && sectors.join(' ')),
          (output = `"${temp_string.split(' ').join('" "')}"`),
          `(sector_code:(${output}) OR transaction_sector_code:(${output}))`)
        : null,
      get(sectors, 'length', 0) && rowFormat === 'transaction'
        ? ((temp_string = sectors && sectors.join(' ')),
          (output = `"${temp_string.split(' ').join('" "')}"`),
          `transaction_sector_code:(${output})`)
        : null,
      get(sectorVocabularies, 'length', 0) && rowFormat === 'activity'
        ? `sector_vocabulary:(${
            sectorVocabularies && sectorVocabularies.join(' ')
          })`
        : null,
      get(sectorVocabularies, 'length', 0) && rowFormat === 'transaction'
        ? `transaction_sector_vocabulary:(${
            sectorVocabularies && sectorVocabularies.join(' ')
          })`
        : null,
      get(secondaryReporter, 'length', 0)
        ? `reporting_org_secondary_reporter:(${
            secondaryReporter && secondaryReporter.join(' ')
          })`
        : null,
      get(countries, 'length', 0) && rowFormat === 'activity'
        ? `(recipient_country_code:(${
            countries && countries.join(' ')
          }) OR transaction_recipient_country_code:(${
            countries && countries.join(' ')
          }))`
        : null,
      get(countries, 'length', 0) && rowFormat === 'budget'
        ? `recipient_country_code:(${countries && countries.join(' ')})`
        : null,
      get(countries, 'length', 0) && rowFormat === 'transaction'
        ? `transaction_recipient_country_code:(${
            countries && countries.join(' ')
          })`
        : null,

      get(regions, 'length', 0) && rowFormat === 'activity'
        ? `(recipient_region_code:(${
            regions && regions.join(' ')
          } OR transaction_recipient_region_code:(${
            regions && regions.join(' ')
          })))`
        : null,
      get(regions, 'length', 0) && rowFormat === 'transaction'
        ? `transaction_recipient_region_code:(${regions && regions.join(' ')})`
        : null,

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

      textSearch && rowFormat === 'activity'
        ? `(title_narrative:"${textSearch}" OR description_narrative:"${textSearch}" OR iati_identifier:"${textSearch}" OR transaction_description_narrative:"${textSearch}")`
        : null,

      textSearch && rowFormat === 'transaction'
        ? `(transaction_description_narrative:"${textSearch}")`
        : null,

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
      get(participatingOrgs, 'length', 0)
        ? ((temp_string = participatingOrgs && participatingOrgs.join(' ')),
          (output = `"${temp_string.split(' ').join('" "')}"`),
          `participating_org_ref:(${output})`)
        : null,
      get(activityStatus, 'length', 0)
        ? `activity_status_code:(${activityStatus && activityStatus.join(' ')})`
        : null,
      get(activityScope, 'length', 0)
        ? `activity_scope_code:(${activityScope && activityScope.join(' ')})`
        : null,
      get(aidType, 'length', 0)
        ? `(default_aid_type_code:(${
            aidType && aidType.join(' ')
          }) OR transaction_aid_type_code:(${aidType && aidType.join(' ')}))`
        : null,
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
      get(defaultCurrency, 'length', 0)
        ? `(default_currency:(${
            defaultCurrency && defaultCurrency.join(' ')
          }) OR transaction_value_currency:(${
            defaultCurrency && defaultCurrency.join(' ')
          }))`
        : null,
      get(defaultFlowType, 'length', 0)
        ? `(default_flow_type_code:(${
            defaultFlowType && defaultFlowType.join(' ')
          }) OR transaction_flow_type_code:(${
            defaultFlowType && defaultFlowType.join(' ')
          }))`
        : null,
      get(hierarchy, 'length', 0)
        ? `hierarchy:(${hierarchy && hierarchy.join(' ')})`
        : null,
      get(financeType, 'length', 0)
        ? `(default_finance_type_code:(${
            financeType && financeType.join(' ')
          }) OR transaction_finance_type_code:(${
            financeType && financeType.join(' ')
          }))`
        : null,
      get(tiedStatus, 'length', 0)
        ? `(default_tied_status_code:(${
            tiedStatus && tiedStatus.join(' ')
          }) OR transaction_tied_status_code:(${
            tiedStatus && tiedStatus.join(' ')
          }))`
        : null,
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
      get(humanitarian, 'length', 0)
        ? `(humanitarian:(${
            humanitarian && humanitarian.join(' ')
          }) OR transaction_humanitarian:(${
            humanitarian && humanitarian.join(' ')
          }))`
        : null,
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
