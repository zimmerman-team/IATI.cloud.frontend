import { createStore, createTypedHooks } from 'easy-peasy';
import model, { IStoreModel } from './model';
import { getOrganisationTypes } from 'app/services/api-service';
import api, { IApiModel } from 'app/store/api';
const { useActions, useStore, useDispatch } = createTypedHooks<IStoreModel>();

export { useActions, useDispatch, useStore };

const store = createStore(model);

// store.getActions().organisationTypes.fetch;
// api(getOrganisationTypes);
// console.log('ja', api(getOrganisationTypes));

export default store;
