/* import { createStore } from 'easy-peasy';
import model from './model';

const store = createStore(model);

export const useStoreActions = store.useStoreActions;
export const useStoreDispatch = store.useStoreDispatch;
export const useStoreState = store.useStoreState;

export default store;
 */


import { createStore, createTypedHooks } from 'easy-peasy';
import model, { IStoreModel } from './model';

const { useActions, useStore, useDispatch } = createTypedHooks<IStoreModel>();

export { useActions, useDispatch, useStore };

const store = createStore(model);

export default store;
