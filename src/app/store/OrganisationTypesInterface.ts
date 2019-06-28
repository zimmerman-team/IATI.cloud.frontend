import { IOrganisationType } from 'app/models/OrganisationTypeModel';
import { getOrganisationTypes } from 'app/services/api-service';
import api, { IApiModel } from './api';

export interface IOrganisationTypesModel
  extends IApiModel<IOrganisationType[]> {}

const organisationTypes: IOrganisationTypesModel = {
  ...api(getOrganisationTypes)
};

export default organisationTypes;
