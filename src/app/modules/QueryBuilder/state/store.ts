import {
  Effects,
  Store,
  createConnectedStore,
  withLogger,
  withReduxDevtools
} from 'undux';
import {
  OrganisationTypeModel,
  OrganisationModel,
  SectorModel,
  SectorCategoryModel,
  CountryModel,
  RegionModel
} from 'app/state/models';
import { fromLocalStorage } from './utils';
import { withEffects } from './effects';

export type ModuleStoreModel = {
  organisationTypes: OrganisationTypeModel[];
  // loadedOrganisationTypes: OrganisationTypeModel[];
  organisations: OrganisationModel[];
  // loadedOrganisations: OrganisationModel[];
  sectors: SectorModel[];
  // loadedSectors: SectorModel[];
  sectorCategories: SectorCategoryModel[];
  // loadedSectorCategories: SectorCategoryModel[];
  countries: CountryModel[];
  // loadedCountries: CountryModel[];
  regions: RegionModel[];
  // loadedRegions: RegionModel[];
  queryString: string;
};

export type StoreEffect = Effects<ModuleStoreModel>;

const initialState = fromLocalStorage<ModuleStoreModel>({
  organisationTypes: [],
  // loadedOrganisationTypes: [],
  organisations: [],
  // loadedOrganisations: [],
  sectors: [],
  // loadedSectors: [],
  sectorCategories: [],
  // loadedSectorCategories: [],
  countries: [],
  // loadedCountries: [],
  regions: [],
  // loadedRegions: [],
  queryString: ''
});

export const ModuleStore = createConnectedStore(initialState, withEffects);
