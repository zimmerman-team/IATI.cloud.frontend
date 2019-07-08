import { StoreEffect, ModuleStoreModel } from './store';
import { combineLatest, from, Observable, of } from 'rxjs';
import { formatUrl } from 'url-lib';
import { catchError, map } from 'rxjs/operators';
import {
  OrganisationModel,
  OrganisationTypeModel,
  SectorModel
} from 'app/state/models';
import { withLogger, withReduxDevtools } from 'undux';

const baseURL = 'http://preview.iatistandard.org/index.php?url=';

export const withEffects: StoreEffect = store => {
  store.onAll().subscribe(() => {
    const organisationTypes = store.get('organisationTypes')
      ? store.get('organisationTypes').map((item: OrganisationTypeModel) => {
          return item.code;
        })
      : null;

    const sectorCategories = store.get('sectorCategories')
      ? store.get('sectorCategories').map((item: SectorModel) => {
          return item.code;
        })
      : null;

    const organisations = store.get('organisations')
      ? store.get('organisations').map((item: OrganisationModel) => {
          return item.organisation_identifier;
        })
      : null;

    const url = formatUrl(
      [baseURL],
      [
        organisations ? { 'reporting-org': organisations } : null,
        organisationTypes ? { 'reporting-org.type': organisationTypes } : null,
        sectorCategories ? { sector: sectorCategories } : null
      ]
    );

    console.log(url);
  });

  withReduxDevtools(store);
  withLogger(store);

  return store;
};
