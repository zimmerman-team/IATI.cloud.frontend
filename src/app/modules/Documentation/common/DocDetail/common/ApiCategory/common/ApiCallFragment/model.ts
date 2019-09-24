import { ApiCallParamItemModel } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList/model';

export type ApiCallModel = {
  callType: string;
  callPath: string;
  callParameters: ApiCallParamItemModel[];
  callDescription: string;
};
