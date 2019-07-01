import { IOrganisation } from 'app/models/OrganisationModel';
import { getOrganisations } from 'app/services/api-service';
import api, { IApiModel } from 'app/store/api';

export interface IOrganisationsInterface extends IApiModel<IOrganisation[]> {}

const organisations: IOrganisationsInterface = {
  ...api(getOrganisations)
};

export default organisations;
