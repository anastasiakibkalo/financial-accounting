import { takeLatest, select, call, put } from "redux-saga/effects";

import * as API from "services";
import requestMiddleware from "utils/requestMiddleware";
import { actionTypes, actions } from "./reducer";

function* fetchUserLogin({ payload }) {
  const req = API.userLogin;

  const { lang } = payload;

  const { sendLoginSuccess: success, sendLoginError: error } = actions;

  yield requestMiddleware({
    req,
    params: payload,
    success,
    error,
    lang,
  });
}

export default function* watchSaga() {
  yield takeLatest(actions.sendLoginRequest().type, fetchUserLogin);
}
