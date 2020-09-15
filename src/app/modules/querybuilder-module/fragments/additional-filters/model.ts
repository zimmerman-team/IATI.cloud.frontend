//cc:query builder module fragments#; query builder fragments - additional filters;fragment model
import { FragmentBaseModel } from 'app/modules/querybuilder-module/fragments/index';

export const fragmentConfig: FragmentBaseModel = {
  name: 'Filters',
  description:
    'First select the organsation to only show applicable filters for thats organisations published data unless you want data from all IATI organisations. You don’t need to use all filters only the onces needed to get the data you want.',
};
