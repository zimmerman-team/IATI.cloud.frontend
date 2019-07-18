import { action, Action } from 'easy-peasy';
import api, { ApiModel, HOSTNAME, ORGANISATION_TYPES } from 'app/state/api';
import { Endpoint } from 'app/state/interfaces/Endpoint';

export const fetchBorgUnits: Endpoint = (params: RequestInit = {}) =>
  fetch(`${HOSTNAME}data/borg.json`, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export interface BorgFragmentModule {
  id: string;
  description: string;
  specifications: string;
}

export interface BorgModel {
  id: string;
  assimilationDate: string;
  modules?: BorgFragmentModule[];
  onReload?: () => void;
}

export interface BorgCollectiveModel extends ApiModel<BorgModel> {
  units: BorgModel[];
  addBorgUnit: Action<BorgCollectiveModel, BorgModel>;
  removeBorgUnit: Action<BorgCollectiveModel, BorgModel>;
}

// https://github.com/ctrlplusb/easy-peasy/blob/v3/website/docs/docs/typescript-tutorial/typing-computed-with-store-state.md
export const borgCollective: BorgCollectiveModel = {
  units: [],
  addBorgUnit: action((state, payload) => {
    state.units.push(payload);
  }),
  removeBorgUnit: action(state => {
    state.units.pop();
  }),
  ...api(fetchBorgUnits),
};
