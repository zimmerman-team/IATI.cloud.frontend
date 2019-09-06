import filter from 'lodash/filter';
import mapValues from 'lodash/mapValues';
import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel,
} from 'app/state/models';

import { formatUrl } from 'url-lib';
import { map } from 'rxjs/operators';
// import { ModuleStore } from 'app/modules/QueryBuilder/state/appStore';

/* todo: https://github.com/golgote/neturl */
/* todo: https://github.com/worksap-ate/http-querystring/blob/master/Network/HTTP/QueryString/Internal.hs */
export function fromLocalStorage<T extends object>(object: T): T {
  return mapValues(object, keyFromLocalStorage) as any;
}

function keyFromLocalStorage<T>(or: T, key: string): T {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return or;
}

export function replace<T>(array: T[], item: T, replacement: T): T[] {
  const index = array.indexOf(item);
  if (index < 0) {
    return array;
  }
  return [...array.slice(0, index), replacement, ...array.slice(index + 1)];
}

const baseURL = 'http://preview.iatistandard.org/index.php?url=';

export const constructQuery = store => {
  const selectedOrganisationTypes = store.get('organisationTypes');
  const selectedSectorsCategories = store.get('sectorCategories');
  const selectedOrganisations = store.get('organisations');

  store
    .on('organisationTypes')
    .pipe(
      map(code => {
        return code;
      })
    )
    .subscribe(code => {
      console.log('organisationTypes', code);
    });

  const organisationTypesGroup = selectedOrganisationTypes
    ? selectedOrganisationTypes.map((type: OrganisationTypeModel) => {
        return type.code;
      })
    : null;
  const sectorsGroup = selectedSectorsCategories
    ? selectedSectorsCategories.map((type: SectorModel) => {
        return type.code;
      })
    : null;
  const organisationGroup = selectedOrganisations
    ? selectedOrganisations.map((type: OrganisationModel) => {
        return type.reporting_organisation_identifier;
      })
    : null;

  const url = formatUrl(
    [baseURL],
    [
      organisationGroup ? { 'reporting-org': organisationGroup } : null,
      organisationTypesGroup
        ? { 'reporting-org.type': organisationTypesGroup }
        : null,
      sectorsGroup ? { sector: sectorsGroup } : null,
    ]
  );

  console.log(url);

  // return url;
};

export const constructSolrQuery = (baseURI, params, fields) => {
  const filterString = `q=${filter(params, p => p !== null).join(' AND ')}`;

  return `${baseURI}${filterString !== 'q=' ? filterString : 'q=*:*'}${
    fields ? `&${fields}` : ''
  }&wt=json&rows=1000000`;
};
