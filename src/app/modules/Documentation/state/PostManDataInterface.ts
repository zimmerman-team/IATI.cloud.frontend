import api, { ApiModel } from 'app/state/api';
import { getPostmanData } from 'app/modules/Documentation/state/service';
import { DocStoreModel } from 'app/modules/Documentation/state/model';

export interface PostManDataInterfaceInterface
  extends ApiModel<DocStoreModel> {}

const postmanData: PostManDataInterfaceInterface = {
  ...api(getPostmanData),
};

export default postmanData;
