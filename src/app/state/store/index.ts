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
import aidType from 'app/state/interfaces/AidTypeInterface';
import aidTypeCategory from 'app/state/interfaces/AidTypeCategoryInterface';
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
  aidType: aidType,
  aidTypeCategory: aidTypeCategory,
};

const appStore = createStore(applicationStore);

const typedHooks = createTypedHooks<ApplicationStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;

export default appStore;
