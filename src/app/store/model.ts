import organisationTypes, { IOrganisationTypesModel } from './OrganisationTypesInterface';

export interface IStoreModel {
  organisationTypes: IOrganisationTypesModel;
}

const model: IStoreModel = {
  organisationTypes: organisationTypes,
};

export default model;
