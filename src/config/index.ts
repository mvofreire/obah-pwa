const env = process.env.NODE_ENV;
const isProd = env === "production";
const baseUrl = isProd
  ? process.env.REACT_APP_API_URL
  : process.env.REACT_APP_API_DEV_URL;

console.log(env, baseUrl, isProd);

const config = {
  storageKey: "obah-key",
  storageUserKey: "obah-user-key",
  baseUrl,
};

export default config;
