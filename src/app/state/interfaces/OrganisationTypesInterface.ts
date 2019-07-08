import { OrganisationTypeModel } from 'app/state/models';
import { getOrganisationTypes } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface OrganisationTypesInterface
  extends ApiModel<OrganisationTypeModel[]> {}

const organisationTypes: OrganisationTypesInterface = {
  ...api(getOrganisationTypes)
};

export default organisationTypes;
