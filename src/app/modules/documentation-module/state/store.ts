//cc:api documentation module#; state - store
import { createStore, createTypedHooks } from 'easy-peasy';
import {
  DocStoreModel,
  fetchPostmanDatas,
  requestsModel,
} from 'app/modules/documentation-module/state/model';
import { docData } from 'app/modules/documentation-module/state/data';
import api from 'app/state/api';

const docStoreModel: DocStoreModel = {
  /* todo: adjust and remove */
  // @ts-ignore
  collection: docData.collection,
  request: requestsModel,
  ...api(fetchPostmanDatas),
};

const docStore = createStore(docStoreModel);

const typedHooks = createTypedHooks<DocStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;

export default docStore;
