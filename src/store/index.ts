import { Store, configureStore } from '@reduxjs/toolkit';
import type {
  StateApp
} from './app';
import {
  appSlice,
  changeLoading
} from './app';

interface MainStore {
  app: StateApp
}

const mainStore: Store<MainStore> = configureStore({
  reducer: {
    app: appSlice.reducer
  }
});

export type {
  MainStore
};

export {
  mainStore,
  changeLoading
};