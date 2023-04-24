import type { AppProps } from "next/app";
import storeWrapper, { SagaStore } from "../store";
import "../styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default storeWrapper.withRedux(App);
