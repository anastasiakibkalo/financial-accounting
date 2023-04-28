import { createSlice } from "@reduxjs/toolkit";

interface IUserData {
  firstName: string;
  secondName: string;
  email: string;
  token: string;
}

export interface IAuthState {
  loading: boolean;
  errorLogin: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
  data: IUserData;
}

const initialUserData = {
  firstName: "",
  secondName: "",
  email: "",
  token: "",
};

const initialState: IAuthState = {
  loading: false,
  errorLogin: false,
  isLoggedIn: false,
  errorMessage: "",
  data: initialUserData,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendLoginRequest: (state) => {
      state.loading = true;
    },
    sendLoginSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    sendLoginError: (state, { payload }) => {
      state.data = initialState.data;
      state.loading = false;
      state.isLoggedIn = false;
      state.errorLogin = true;
      state.errorMessage = payload;
    },
    setAccessToken: (state, { payload }) => {
      state.data.token = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { actions, reducer } = authSlice;
