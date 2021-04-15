import { Envs } from "./envs";

const env = process.env.VERCEL || Envs.development;
const isProd = env === Envs.production;

const baseUrl = isProd
  ? process.env.REACT_APP_API_URL
  : process.env.REACT_APP_API_DEV_URL;

console.log(env, baseUrl, process.env.VERCEL);

const config = {
  storageKey: "obah-key",
  storageUserKey: "obah-user-key",
  baseUrl,
};

export default config;
