import { ApiCallParamItemModel } from 'app/modules/Documentation/common/DocDetail/common/lists/ApiParameterList/model';

export type ApiQuryModel = {
  key: string;
  value: string;
};

export type ApiUrlModel = {
  raw: string;
  host: string[];
  path: string[];
  query: ApiQuryModel[];
  description: string;
};

export type ApiRequestModel = {
  method: string;
  url: ApiUrlModel;
  description: string;
};

export type ApiCallModel = {
  callType: string;
  callPath: string;
  callParameters: ApiCallParamItemModel[];
  callDescription: string;
  name?: string;
  _postman_id?: string;
  request?: ApiRequestModel;
};
