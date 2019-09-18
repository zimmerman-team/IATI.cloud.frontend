import { Effects, createConnectedStore } from 'undux';
import {
  OrganisationTypeModel,
  OrganisationModel,
  SectorModel,
  SectorCategoryModel,
  CountryModel,
  RegionModel,
  ActivityStatusModel,
  ParticipatingOrgsModel,
  TransactionProviderOrgModel,
} from 'app/state/models';
import { fromLocalStorage } from './utils';
import { withEffects } from './effects';

export type ModuleStoreModel = {
  organisationTypes: OrganisationTypeModel[];
  organisations: OrganisationModel[];
  sectors: SectorModel[];
  sectorCategories: SectorCategoryModel[];
  countries: CountryModel[];
  regions: RegionModel[];
  additionalFilters?: any;
  activityStatus: ActivityStatusModel[];
  activityScope: ActivityStatusModel[];
  aidType: ActivityStatusModel[];
  aidTypeCategory: ActivityStatusModel[];
  aidTypeVocabulary: ActivityStatusModel[];
  collaborationType: ActivityStatusModel[];
  mustHaveDates: string;
  startDate: any;
  endDate: any;
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
  sectorCategories: [],
  countries: [],
  regions: [],
  additionalFilters: [],
  textSearch: '',
  activityStatus: [],
  activityScope: [],
  aidType: [],
  aidTypeCategory: [],
  aidTypeVocabulary: [],
  collaborationType: [],
  mustHaveDates: 'No',
  startDate: '',
  endDate: '',
  participatingOrgs: [],
  transactionProviderOrgs: [],
  transactionReceiverOrgs: [],
  fields: [],
  rowFormat: 'activity',
  repeatRows: '0',
});

export type StoreEffect = Effects<ModuleStoreModel>;

export const ModuleStore = createConnectedStore(initialState, withEffects);
