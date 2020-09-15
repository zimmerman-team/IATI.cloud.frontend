import { Endpoint } from 'app/state/interfaces/Endpoint';

export const getPostmanData: Endpoint = (params: RequestInit = {}) =>
  fetch(
    'https://iatidatastore.iatistandard.org/static/postman/postman_json.json',
    {
      method: 'GET',
    }
  ).then((res) => res.json());
