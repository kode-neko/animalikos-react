import { Slice, createSlice, PayloadAction } from '@reduxjs/toolkit';

enum ThemeLayout {
  LIGHT='light',
  DARK='dark'
}

interface StateApp {
  lang: string,
  theme: ThemeLayout,
  loading: boolean
}

const appSlice: Slice = createSlice({
  name: 'app',
  initialState: {
    lang: 'en',
    theme: ThemeLayout.LIGHT,
    loading: false
  },
  reducers: {
    changeLang: (state: StateApp, action: PayloadAction<StateApp['lang']>) => {
      state.lang = action.payload;
    },
    changeTheme: (state: StateApp, action: PayloadAction<StateApp['theme']>) => {
      state.theme = action.payload;
    },
    changeLoading: (state: StateApp, action: PayloadAction<StateApp['loading']>) => {
      state.loading = action.payload;
    }
  }
});

const {changeLang, changeTheme, changeLoading} = appSlice.actions;

export type {
  StateApp
};

export {
  appSlice,
  changeLang, 
  changeTheme, 
  changeLoading
};