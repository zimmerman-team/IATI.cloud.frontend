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
  outputFormat?: any;
  repeatRows?: any;
  sampleSize?: any;
  additionalFilters?: any;
  activityStatus: ActivityStatusModel[];
  activityScope: ActivityStatusModel[];
  aidType: ActivityStatusModel[];
  mustHaveDates: string;
  startDate: any;
  endDate: any;
  textSearch: string;
  participatingOrgs: ParticipatingOrgsModel[];
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
  mustHaveDates: 'No',
  startDate: '2001-01-01',
  endDate: '2001-01-01',
  participatingOrgs: [],
});

export type StoreEffect = Effects<ModuleStoreModel>;

export const ModuleStore = createConnectedStore(initialState, withEffects);
