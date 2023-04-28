import { takeLatest, select, call, put } from "redux-saga/effects";

import * as API from "services";
import { requestMiddleware } from "utils";
import { actionTypes, actions } from "./reducer";
import { setCookie } from "cookies-next";

function* fetchUserLogin({ payload }) {
  const req = API.userLogin;

  const { lang } = payload;
  const { sendLoginSuccess: success, sendLoginError: error } = actions;

  function* postSuccessEffect(responseSuccess) {
    console.log(responseSuccess);
    setCookie("FAAccessToken", responseSuccess.token);
  }

  yield requestMiddleware({
    req,
    params: payload,
    success,
    error,
    postSuccessEffect,
    lang,
  });
}

export default function* watchSaga() {
  yield takeLatest(actions.sendLoginRequest().type, fetchUserLogin);
}
