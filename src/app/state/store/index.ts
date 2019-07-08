import { createStore } from 'easy-peasy';
import { ApplicationStoreModel } from 'app/state/models';
import organisationTypes from 'app/state/interfaces/OrganisationTypesInterface';
import organisations from 'app/state/interfaces/OrganisationsInterface';
import sectors from 'app/state/interfaces/SectorsInterface';
import regions from 'app/state/interfaces/RegionsInterface';
import countries from 'app/state/interfaces/CountriesInterface';
import sectorCategories from 'app/state/interfaces/SectorCategoryInterface';
import { borgCollective } from 'app/state/models/CyborgModel';

const model: ApplicationStoreModel = {
  organisationTypes: organisationTypes,
  organisations: organisations,
  sectors: sectors,
  regions: regions,
  countries: countries,
  sectorCategories: sectorCategories,
  borgCollective: borgCollective
};

const store = createStore(model);

export const useStoreActions = store.useStoreActions;
export const useStoreState = store.useStoreState;

export default store;
