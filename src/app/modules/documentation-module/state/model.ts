//cc:api documentation module#; state - model
import { action, Action } from 'easy-peasy';
import { Endpoint } from 'app/state/interfaces/Endpoint';
import { ApiModel } from 'app/state/api';

export const fetchPostmanDatas: Endpoint = (params: RequestInit = {}) =>
  fetch(
    `https://iatidatastore.iatistandard.org/static/postman/${process.env.REACT_APP_DOC_FILENAME}`,
    {
      method: 'GET',
      ...params,
    }
  ).then((res) => res.json());

export interface RequestModel {
  method: string;
  header?: any[];
  url: UrlModel;
  description?: string;
}

export interface RequestsModel {
  activeRequest: RequestModel;
  showRequest: Action<RequestsModel, RequestModel>;
}

export const requestsModel: RequestsModel = {
  activeRequest: {
    method: 'GET',
    header: [],
    url: {
      raw:
        '{{url}}/api/activities/?sector_category=111&format=json&fields=title,sectors,id',
      host: ['{{url}}'],
      path: ['api', 'activities', ''],
      query: [
        {
          key: 'sector_category',
          value: '111',
        },
        {
          key: 'format',
          value: 'json',
        },
        {
          key: 'fields',
          value: 'title,sectors,id',
        },
      ],
    },
  },
  showRequest: action((state, payload) => {
    state.activeRequest = payload;
  }),
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

export interface DocStoreModel extends ApiModel<Collection> {
  collection: Collection;
  request: RequestsModel;
  // postmanData: PostmanRoot;
}

export interface Collection {
  info: Info;
  item: MainCategoryModel[];
}

export interface Info {
  id: string;
  name: string;
  description: string;
  schema: string;
}

export interface MainCategoryModel {
  name: string;
  item: SubCategory1Model[];
  id?: string;
  description?: string;
}

export interface SubCategory1Model {
  name: string;
  id: string;
  protocolProfileBehavior?: ProtocolProfileBehavior;
  request?: RequestModel;
  item?: SubCategory2Model[];
  _postman_isSubFolder?: boolean;
  description?: string;
}

export interface SubCategory2Model {
  name: string;
  id: string;
  protocolProfileBehavior?: ProtocolProfileBehavior;
  request?: RequestModel;
  item?: SubCategory3Model[];
  description?: string;
  _postman_isSubFolder?: boolean;
}

export interface SubCategory3Model {
  name: string;
  id: string;
  protocolProfileBehavior: ProtocolProfileBehavior;
  request: RequestModel;
  description?: string;
}

//////////////////////////////////
