//cc:query builder module#; query builder state; store
import { createConnectedStore, Effects } from 'undux';
import {
  ActivityStatusModel,
  CountryModel,
  OrganisationModel,
  OrganisationTypeModel,
  ParticipatingOrgsModel,
  RegionModel,
  SectorCategoryModel,
  SectorModel,
  SectorVocabularyModel,
  TransactionProviderOrgModel,
} from 'app/state/models';
import { fromLocalStorage } from './utils';
import { withEffects } from './effects';

export type ModuleStoreModel = {
  organisationTypes: OrganisationTypeModel[];
  organisations: OrganisationModel[];
  sectors: SectorModel[];
  sectorCategories: SectorCategoryModel[];
  sectorVocabularies: SectorVocabularyModel[];
  countries: CountryModel[];
  regions: RegionModel[];
  secondaryReporter: OrganisationTypeModel[];
  additionalFilters?: any;
  activityStatus: ActivityStatusModel[];
  activityScope: ActivityStatusModel[];
  aidType: ActivityStatusModel[];
  aidTypeCategory: ActivityStatusModel[];
  aidTypeVocabulary: ActivityStatusModel[];
  defaultCurrency: ActivityStatusModel[];
  collaborationType: ActivityStatusModel[];
  defaultFlowType: ActivityStatusModel[];
  hierarchy: ActivityStatusModel[];
  financeType: ActivityStatusModel[];
  tiedStatus: ActivityStatusModel[];
  transactionType: ActivityStatusModel[];
  transactionFlowType: ActivityStatusModel[];
  transactionTiedStatus: ActivityStatusModel[];
  transactionValueCurrency: ActivityStatusModel[];
  documentLinkCategory: ActivityStatusModel[];
  iatiVersion: ActivityStatusModel[];
  language: ActivityStatusModel[];
  humanitarian: ActivityStatusModel[];
  humanitarianScope: ActivityStatusModel[];
  humanitarianScopeVocab: ActivityStatusModel[];
  transactionHumanitarian: ActivityStatusModel[];
  otherIdentifierType: ActivityStatusModel[];
  policyMarker: ActivityStatusModel[];
  tag: ActivityStatusModel[];
  tagVocabulary: ActivityStatusModel[];
  mustHaveDates: string;
  startDateAfter: any;
  startDateBefore: any;
  endDateAfter: any;
  endDateBefore: any;
  textSearch: string;
  transactionProviderOrgs: TransactionProviderOrgModel[];
  transactionReceiverOrgs: TransactionProviderOrgModel[];
  participatingOrgs: ParticipatingOrgsModel[];
  fields: ActivityStatusModel[];
  rowFormat: string;
  repeatRows: string;
};

const initialState = fromLocalStorage<ModuleStoreModel>({
  organisationTypes: [],
  organisations: [],
  sectors: [],
  policyMarker: [],
  tag: [],
  tagVocabulary: [],
  sectorCategories: [],
  sectorVocabularies: [],
  countries: [],
  regions: [],
  secondaryReporter: [],
  additionalFilters: [],
  textSearch: '',
  activityStatus: [],
  activityScope: [],
  aidType: [],
  aidTypeCategory: [],
  aidTypeVocabulary: [],
  defaultCurrency: [],
  collaborationType: [],
  defaultFlowType: [],
  hierarchy: [],
  financeType: [],
  tiedStatus: [],
  transactionType: [],
  transactionFlowType: [],
  transactionTiedStatus: [],
  transactionValueCurrency: [],
  documentLinkCategory: [],
  iatiVersion: [],
  language: [],
  humanitarian: [],
  humanitarianScope: [],
  humanitarianScopeVocab: [],
  transactionHumanitarian: [],
  otherIdentifierType: [],
  mustHaveDates: '0',
  startDateAfter: '',
  startDateBefore: '',
  endDateAfter: '',
  endDateBefore: '',
  participatingOrgs: [],
  transactionProviderOrgs: [],
  transactionReceiverOrgs: [],
  fields: [],
  rowFormat: 'activity',
  repeatRows: '0',
});

export type StoreEffect = Effects<ModuleStoreModel>;

export const ModuleStore = createConnectedStore(initialState, withEffects);
