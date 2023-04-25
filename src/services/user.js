import ApiProvider from "./API";

export const userLogin = ({ params, token, lang }) => {
  return ApiProvider(token, lang)
    .client.post("/auth/login", params)
    .then((response) => response)
    .catch((error) => error.response);
};
