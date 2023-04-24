import { call, put } from "redux-saga/effects";

function* requestMiddleware({
  req,
  params,
  success,
  error,
  postSuccessEffect,
  lang,
  token,
}) {
  try {
    const data = yield call(req, { params, token, lang });

    if (data.status >= 200 && data.status < 300) {
      yield put(success(data.data));

      if (postSuccessEffect) yield postSuccessEffect(data.data);
    } else {
      yield put(error(data.data));
      // yield call(setRequestError, data);
    }
  } catch (err) {
    console.log(err);
    yield put(error(err));
    // yield call(setRequestError);
  }
}

export { requestMiddleware };
