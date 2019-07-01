import organisationTypes, {
  IOrganisationTypesInterface
} from 'app/interfaces/OrganisationTypesInterface';

import organisations, {
  IOrganisationsInterface
} from 'app/interfaces/OrganisationsInterface';

import sectors, { ISectorsInterface } from 'app/interfaces/SectorsInterface';

export interface IStoreModel {
  organisationTypes: IOrganisationTypesInterface;
  organisations: IOrganisationsInterface;
  sectors: ISectorsInterface;
}

const model: IStoreModel = {
  organisationTypes: organisationTypes,
  organisations: organisations,
  sectors: sectors
};

export default model;
