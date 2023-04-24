import axios from "axios";
import { API_URL } from "constant";
import { getCookie } from "cookies-next";

export function getToken() {
  if (typeof window === "undefined") return null;

  // const storage = JSON.parse(localStorage.getItem('persist:eco_storage'));
  const token = getCookie("FinanceAccessToken");

  // if (!storage) return null;

  // let token = null;

  // if (storage.signIn) {
  //   const signIn = JSON.parse(storage.signIn);
  //   if (signIn.token) token = signIn.token;
  // }

  // if (!token && storage.signUp) {
  //   const signUp = JSON.parse(storage.signUp);
  //   if (signUp.token) token = signUp.token;
  // }

  return token;
}

export default function ApiProvider(ssrToken, locale, isSSR) {
  const token = ssrToken || getToken();

  if (
    ApiProvider.provider &&
    ApiProvider.provider.apiURL === API_URL &&
    ApiProvider.provider.token === token &&
    token !== null &&
    ApiProvider.provider.locale === locale &&
    locale !== null
  ) {
    return ApiProvider.provider;
  }

  const userAgent = isSSR ? process.env.NEXT_PUBLIC_SERVER_USER_AGENT : null;

  const client = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale || "uk",
      "Frontend-User-Agent": userAgent,
    },
  });

  const clientUpload = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "multipart/form-data",
      "Content-Language": "en-US,en;",
    },
  });

  if (token) {
    client.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    clientUpload.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  ApiProvider.provider = {
    client,
    clientUpload,
    apiURL: API_URL,
    token,
  };

  return ApiProvider.provider;
}
