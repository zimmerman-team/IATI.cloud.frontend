//cc:query builder module#; query builder state; utils
import filter from 'lodash/filter';
import mapValues from 'lodash/mapValues';
import { ROWS } from 'app/state/models/QueryModel';

function keyFromLocalStorage<T>(or: T, key: string): T {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return or;
}

export function fromLocalStorage<T extends object>(object: T): T {
  return mapValues(object, keyFromLocalStorage) as any;
}

export function replace<T>(array: T[], item: T, replacement: T): T[] {
  const index = array.indexOf(item);
  if (index < 0) {
    return array;
  }
  return [...array.slice(0, index), replacement, ...array.slice(index + 1)];
}

export const constructSolrQuery = (
  baseURI: string,
  params: string[],
  fields: string
) => {
  const filterString = `q=${filter(params, (p) => p !== null).join(' AND ')}`;

  return `${baseURI}${filterString !== 'q=' ? filterString : 'q=*:*'}${
    fields ? `&${fields}` : ''
  }&wt=json&rows=${ROWS}`;
};
