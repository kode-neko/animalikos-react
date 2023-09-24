import { Store, configureStore } from '@reduxjs/toolkit';
import type {
  StateApp
} from './app';
import {
  appSlice,
  changeLang, 
  changeTheme, 
  changeLoading
} from './app';

interface MainStore {
  app: StateApp
}

const mainStore: Store<MainStore> = configureStore({
  reducer: appSlice.reducer
});

export {
  mainStore,
  changeLang, 
  changeTheme, 
  changeLoading
};