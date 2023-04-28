import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer, saga } from "components/Authorization/export";
import { IAuthState } from "components/Authorization/reducer";

interface IReducer {
  auth: IAuthState;
}

export const rootReducers = combineReducers<IReducer>({
  auth: reducer,
});

export const rootSagas = function* rootSaga() {
  yield all([saga()]);
};

export type IRootState = ReturnType<typeof rootReducers>;
