const env = process.env.NODE_ENV;
const isProd = env === "production";
const apiUrl = isProd
  ? process.env.REACT_APP_API_URL
  : process.env.REACT_APP_API_DEV_URL;
console.log(apiUrl);
const config = {
  storageKey: "obah-key",
  storageUserKey: "obah-user-key",
  baseUrl: apiUrl,
};

export default config;
