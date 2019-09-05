import { OrganisationTypesInterface } from 'app/state/interfaces/OrganisationTypesInterface';
import { OrganisationsInterface } from 'app/state/interfaces/OrganisationsInterface';
import { SectorsInterface } from 'app/state/interfaces/SectorsInterface';
import { RegionInterface } from 'app/state/interfaces/RegionsInterface';
import { CountryInterface } from 'app/state/interfaces/CountriesInterface';
import { SectorCategoryInterface } from 'app/state/interfaces/SectorCategoryInterface';
import { ActivityScopeInterface } from 'app/state/interfaces/ActivityScopeInterface';
import { ActivityStatusInterface } from 'app/state/interfaces/ActivityStatusInterface';
import { AidTypeInterface } from 'app/state/interfaces/AidTypeInterface';
import { AidTypeCategoryInterface } from 'app/state/interfaces/AidTypeCategoryInterface';
import { ParticipatingOrgsInterface } from 'app/state/interfaces/ParticipatingOrgsInterface';
// import { BorgCollectiveModel } from 'app/state/models/CyborgModel';
import { QueryModel } from 'app/state/models/QueryModel';

export interface ApplicationStoreModel {
  organisationTypes: OrganisationTypesInterface;
  organisations: OrganisationsInterface;
  sectors: SectorsInterface;
  regions: RegionInterface;
  countries: CountryInterface;
  sectorCategories: SectorCategoryInterface;
  // borgCollective: BorgCollectiveModel;
  query: QueryModel;
  activityStatus: ActivityStatusInterface;
  activityScope: ActivityScopeInterface;
  aidType: AidTypeInterface;
  participatingOrgs: ParticipatingOrgsInterface;
  aidTypeCategory: AidTypeCategoryInterface;
}
