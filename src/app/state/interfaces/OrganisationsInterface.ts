import { OrganisationModel } from 'app/state/models';
import { getOrganisations } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface OrganisationsInterface extends ApiModel<OrganisationModel[]> {}

const organisations: OrganisationsInterface = {
  ...api(getOrganisations)
};

export default organisations;
