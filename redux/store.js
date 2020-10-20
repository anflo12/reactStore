import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import {reducer} from './reducers/index';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {parse, stringify} from 'flatted';

export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
  transforms: [transformCircular],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
