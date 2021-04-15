import { Envs } from "./envs";

const env = process.env.NODE_ENV || Envs.development;
const isProd = env === Envs.production;
const baseUrl = process.env.REACT_APP_API_URL;

const config = {
  storageKey: "obah-key",
  storageUserKey: "obah-user-key",
  baseUrl,
};

export default config;
