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
  additionalFilters?: any;
  activityStatus: ActivityStatusModel[];
  activityScope: ActivityStatusModel[];
  aidType: ActivityStatusModel[];
  aidTypeCategory: ActivityStatusModel[];
  mustHaveDates: string;
  startDate: any;
  endDate: any;
  textSearch: string;
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
  mustHaveDates: 'No',
  startDate: '2001-01-01',
  endDate: '2001-01-01',
  participatingOrgs: [],
  fields: [
    { code: 'iati_identifier', name: 'IATI Identifier' },
    { code: 'sectors', name: 'Sectors' },
    { code: 'recipient_countries', name: 'Recipient Countries' },
    { code: 'recipient_regions', name: 'Recipient Regions' },
  ],
  rowFormat: 'activities',
  repeatRows: '0',
});

export type StoreEffect = Effects<ModuleStoreModel>;

export const ModuleStore = createConnectedStore(initialState, withEffects);
