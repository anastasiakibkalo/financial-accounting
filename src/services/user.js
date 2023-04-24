import ApiProvider from "./API";
import axios from "axios";

export const userLogin = ({ params, token, lang }) => {
  return ApiProvider(token, lang)
    .client.post("/auth/register", params)
    .then((res) => res)
    .catch((err) => err.response);
};
