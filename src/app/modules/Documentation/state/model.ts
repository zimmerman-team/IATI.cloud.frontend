export type RequestModel = {
  method: string;
  header?: any[];
  url: UrlModel;
  description?: string;
};

export type UrlModel = {
  raw: string;
  host?: string[];
  path?: string[];
  query?: QueryModel[];
};

export type QueryModel = {
  key: string;
  value: string;
  type?: string;
  disabled?: boolean;
  description?: string;
};

export type ProtocolProfileBehavior = {
  disableBodyPruning: boolean;
};

////////////////////////////////////////////////

//cc:joejoejoe
export interface DocStoreModel {
  collection: Collection;
}

export interface Collection {
  info: Info;
  item: MainCategoryModel[];
}

export interface Info {
  _postman_id: string;
  name: string;
  description: string;
  schema: string;
}

export interface MainCategoryModel {
  name: string;
  item: SubCategory1Model[];
  _postman_id?: string;
  description?: string;
}

export interface SubCategory1Model {
  name: string;
  _postman_id: string;
  protocolProfileBehavior?: ProtocolProfileBehavior;
  request?: RequestModel;
  item?: SubCategory2Model[];
  _postman_isSubFolder?: boolean;
  description?: string;
}

export interface SubCategory2Model {
  name: string;
  _postman_id: string;
  protocolProfileBehavior?: ProtocolProfileBehavior;
  request?: RequestModel;
  item?: SubCategory3Model[];
  description?: string;
  _postman_isSubFolder?: boolean;
}

export interface SubCategory3Model {
  name: string;
  _postman_id: string;
  protocolProfileBehavior: ProtocolProfileBehavior;
  request: RequestModel;
  description?: string;
}

//////////////////////////////////
