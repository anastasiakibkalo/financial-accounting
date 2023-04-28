import { useEffect } from "react";
import type { AppProps } from "next/app";
import storeWrapper, { SagaStore } from "../store";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { actions as loginActions } from "../components/Authorization/export";
import { IRootState } from "src/reducer";
import { IAuthState } from "components/Authorization/reducer";

import "../styles/index.scss";

const accessToken = getCookie("FAAccessToken");

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector<IRootState, IAuthState>(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loginActions.setAccessToken(accessToken));
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      //get user information
    }
  }, [isLoggedIn]);

  return <Component {...pageProps} />;
}

export default storeWrapper.withRedux(App);
