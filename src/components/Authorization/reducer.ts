import { createSlice } from "@reduxjs/toolkit";

export interface IMainState {
  loading: boolean;
  data: any;
}

const initialState: IMainState = {
  loading: false,
  data: {
    isLoggedIn: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendLoginRequest: (state) => {
      state.data.loading = true;
    },
    sendLoginSuccess: (state, { payload }) => {
      state.data = payload;
      state.data.loading = false;
    },
    sendLoginError: (state) => {
      state.data = {};
      state.data.loading = false;
    },
  },
});

export const { actions, reducer } = authSlice;
