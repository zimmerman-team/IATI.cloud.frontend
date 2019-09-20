import { createStore, createTypedHooks } from 'easy-peasy';
import { ApplicationStoreModel } from 'app/state/models';
import organisationTypes from 'app/state/interfaces/OrganisationTypesInterface';
import organisations from 'app/state/interfaces/OrganisationsInterface';
import sectors from 'app/state/interfaces/SectorsInterface';
import regions from 'app/state/interfaces/RegionsInterface';
import countries from 'app/state/interfaces/CountriesInterface';
import sectorCategories from 'app/state/interfaces/SectorCategoryInterface';
import activityStatus from 'app/state/interfaces/ActivityStatusInterface';
import activityScope from 'app/state/interfaces/ActivityScopeInterface';
import transactionProviderOrgs from 'app/state/interfaces/TransactionProviderOrgsInterface';
import transactionReceiverOrgs from 'app/state/interfaces/TransactionReceiverOrgsInterface';
import aidType from 'app/state/interfaces/AidTypeInterface';
import aidTypeVocabulary from 'app/state/interfaces/AidTypeVocabularyInterface';
import defaultCurrency from 'app/state/interfaces/DefaultCurrencyInterface';
import aidTypeCategory from 'app/state/interfaces/AidTypeCategoryInterface';
import collaborationType from 'app/state/interfaces/CollaborationTypeInterface';
import defaultFlowType from 'app/state/interfaces/DefaultFlowTypeInterface';
import hierarchy from 'app/state/interfaces/HierarchyInterface';
import financeType from 'app/state/interfaces/FinanceTypeInterface';
import tiedStatus from 'app/state/interfaces/TiedStatusInterface';
import transactionType from 'app/state/interfaces/TransactionTypeInterface';
import documentLinkCategory from 'app/state/interfaces/DocumentLinkCategoryInterface';
import iatiVersion from 'app/state/interfaces/IATIVersionInterface';
import participatingOrgs from 'app/state/interfaces/ParticipatingOrgsInterface';
import { queryModel } from 'app/state/models/QueryModel';

const applicationStore: ApplicationStoreModel = {
  organisationTypes: organisationTypes,
  organisations: organisations,
  sectors: sectors,
  regions: regions,
  countries: countries,
  sectorCategories: sectorCategories,
  query: queryModel,
  activityStatus: activityStatus,
  participatingOrgs: participatingOrgs,
  activityScope: activityScope,
  transactionProviderOrgs: transactionProviderOrgs,
  transactionReceiverOrgs: transactionReceiverOrgs,
  aidType: aidType,
  aidTypeVocabulary: aidTypeVocabulary,
  aidTypeCategory: aidTypeCategory,
  collaborationType: collaborationType,
  defaultCurrency: defaultCurrency,
  defaultFlowType: defaultFlowType,
  hierarchy: hierarchy,
  financeType: financeType,
  transactionType: transactionType,
  tiedStatus: tiedStatus,
  documentLinkCategory: documentLinkCategory,
  iatiVersion: iatiVersion,
};

const appStore = createStore(applicationStore);

const typedHooks = createTypedHooks<ApplicationStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;

export default appStore;
