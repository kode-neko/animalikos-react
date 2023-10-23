import { Slice, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateApp {
  loading: boolean
}

const appSlice: Slice = createSlice({
  name: 'app',
  initialState: {
    loading: false
  },
  reducers: {
    changeLoading: (state: StateApp, action: PayloadAction<StateApp['loading']>) => {
      state.loading = action.payload;
    }
  }
});

const {changeLoading} = appSlice.actions;

export type {
  StateApp
};

export {
  appSlice,
  changeLoading
};