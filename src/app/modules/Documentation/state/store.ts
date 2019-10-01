import { createStore, createTypedHooks } from "easy-peasy";
import { DocStoreModel, requestsModel } from "app/modules/Documentation/state/model";
import { docData } from "app/modules/Documentation/state/data";

const docStoreModel: DocStoreModel = {
  collection: docData.collection,
  request: requestsModel,
};

const docStore = createStore(docStoreModel);

const typedHooks = createTypedHooks<DocStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;

export default docStore;
