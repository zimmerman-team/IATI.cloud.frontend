import api, { ApiModel } from 'app/state/api';
import { Endpoint } from 'app/state/interfaces/Endpoint';

export const fetchPostmanDatas: Endpoint = (params: RequestInit = {}) =>
  fetch(
    `https://datastore.iati.cloud/backend/static/postman/postman_json.json`,
    {
      method: 'GET',
      ...params,
    }
  ).then(res => res.json());

export interface PostmanItem2 {
  _postman_id: string;
  _postman_isSubFolder?: boolean;
  item?: PostmanItem3[];
  name: string;
  description?: string;
  protocolProfileBehavior?: PostmanProtocolProfileBehavior3;
  request?: PostmanRequest3;
}

export interface PostmanItem3 {
  protocolProfileBehavior?: PostmanProtocolProfileBehavior;
  _postman_id: string;
  request?: PostmanRequest;
  name: string;
  _postman_isSubFolder?: boolean;
  description?: string;
  item?: PostmanItem4[];
}

export interface PostmanProtocolProfileBehavior {
  disableBodyPruning: boolean;
}

export interface PostmanRequest {
  method: string;
  header: any[];
  url: PostmanUrl;
  description?: string;
}

export interface PostmanUrl {
  query: PostmanQuery[];
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
}

export interface PostmanQuery {
  key: string;
  value: string;
  disabled?: boolean;
  type?: string;
  description?: string;
}

export interface PostmanItem4 {
  protocolProfileBehavior: PostmanProtocolProfileBehavior2;
  _postman_id: string;
  request: Request2;
  name: string;
}

export interface PostmanProtocolProfileBehavior2 {
  disableBodyPruning: boolean;
}

export interface Request2 {
  method: string;
  description?: string;
  header: PostmanHeader[];
  url: Url2;
  body?: PostmanBody;
}

export interface PostmanHeader {
  key: string;
  value: string;
  type: string;
}

export interface Url2 {
  query?: PostmanQuery2[];
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
}

export interface PostmanQuery2 {
  key: string;
  value: string;
  disabled?: boolean;
  type?: string;
}

export interface PostmanBody {
  mode: string;
  raw?: string;
  formdata?: PostmanFormdaum[];
}

export interface PostmanFormdaum {
  key: string;
  value: string;
  type: string;
  disabled?: boolean;
}

export interface PostmanProtocolProfileBehavior3 {
  disableBodyPruning: boolean;
}

export interface PostmanRequest3 {
  method: string;
  header: any[];
  url: PostmanUrl3;
  description?: string;
}

export interface PostmanUrl3 {
  query: PostmanQuery3[];
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
}

export interface PostmanQuery3 {
  key: string;
  value: string;
  disabled?: boolean;
  type?: string;
}

export interface PostmanInfo {
  schema: string;
  name: string;
  description: string;
  _postman_id: string;
}

export interface PostmanItem {
  description?: string;
  _postman_id: string;
  item: PostmanItem2[];
  name: string;
}

export interface PostmanCollection {
  item: PostmanItem[];
  info: PostmanInfo;
}

export interface PostmanRoot extends ApiModel<PostmanCollection> {
  collection: PostmanCollection;
}

export const postmanDatas: PostmanRoot = {
  // @ts-ignore
  collection: [],
  ...api(fetchPostmanDatas),
};
