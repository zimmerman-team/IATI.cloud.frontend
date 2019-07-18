import { Action } from 'react-fetching-library';

export const fetchBorgList: Action = {
  method: 'GET',
  endpoint: '/data/borg.json',
};

export const fetchOrganisations: Action = {
  method: 'GET',
  endpoint: '/data/organisations.json',
};
