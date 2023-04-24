import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer, saga } from "components/Authorization/export";

interface IReducer {
  user: any;
}

export const rootReducers = combineReducers<IReducer>({
  user: reducer,
});

export const rootSagas = function* rootSaga() {
  yield all([saga()]);
};

export type IRootState = ReturnType<typeof rootReducers>;
