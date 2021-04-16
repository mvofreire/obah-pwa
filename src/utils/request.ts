import config from "config";
import { getStorage } from "utils/storage";

const createUrl = async (endpoint: string) => {
  return `${config.baseUrl}${endpoint}`;
};

const createHeaders = () => {
  const session = getStorage(config.storageKey);
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (!!session) {
    headers["Authorization"] = `Bearer ${session.token}`;
  }

  return new Headers(headers);
};

export const getQueryString = (params: any): string => {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .filter((k) => !!params[k])
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
};

const createResponse = async (response: Response) => {
  const { ok } = response;
  if (ok) {
    return response.json();
  }
  throw new Error();
};

const get = async (endpoint: string, params = null) => {
  const url = !!params
    ? await createUrl(`${endpoint}?${getQueryString(params)}`)
    : await createUrl(endpoint);

  const response = await fetch(url, {
    headers: await createHeaders(),
  });
  return createResponse(response);
};

const post = async (endpoint: string, params: any) => {
  const url = await createUrl(endpoint);
  const response = await fetch(url, {
    method: "POST",
    headers: await createHeaders(),
    body: JSON.stringify(params),
  });

  return createResponse(response);
};

const initInstance = () => {
  return {
    get,
    post,
  };
};

export default initInstance();
