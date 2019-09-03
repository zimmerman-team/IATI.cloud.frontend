import { Effects, createConnectedStore } from 'undux';
import {
  OrganisationTypeModel,
  OrganisationModel,
  SectorModel,
  SectorCategoryModel,
  CountryModel,
  RegionModel,
  ActivityStatusModel,
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
};

const initialState = fromLocalStorage<ModuleStoreModel>({
  organisationTypes: [],
  organisations: [],
  sectors: [],
  sectorCategories: [],
  countries: [],
  regions: [],
  additionalFilters: [],
  activityStatus: [],
});

export type StoreEffect = Effects<ModuleStoreModel>;

export const ModuleStore = createConnectedStore(initialState, withEffects);
