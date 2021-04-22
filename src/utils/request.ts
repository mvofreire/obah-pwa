import config from "config";
import { getStorage } from "utils/storage";
import axios from "axios";

const createUrl = (endpoint: string) => {
  return `${config.baseUrl}${endpoint}`;
};

const createHeaders = (headers: Record<string, any> = {}) => {
  const session = getStorage(config.storageKey);
  let _headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (!!session) {
    _headers["Authorization"] = `Bearer ${session.token}`;
  }

  return new Headers(_headers);
};

export const getQueryString = (params: any): string => {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .filter((k) => !!params[k])
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
};

const createResponse = async (response: Response, isJSONResponse = true) => {
  const { ok } = response;

  if (!ok) {
    throw new Error();
  }

  if (ok && isJSONResponse) {
    return response.json();
  } else {
    return response;
  }
};

const get = async (endpoint: string, params = {}) => {
  const url = !!params
    ? await createUrl(`${endpoint}?${getQueryString(params)}`)
    : await createUrl(endpoint);

  const response = await fetch(url, {
    headers: await createHeaders(),
  });
  return createResponse(response);
};

const post = async (endpoint: string, params: any) => {
  const url = createUrl(endpoint);
  const response = await fetch(url, {
    method: "POST",
    headers: await createHeaders(),
    body: JSON.stringify(params),
  });

  return createResponse(response);
};

const upload = async (endpoint: string, params: Record<string, File>) => {
  const url = createUrl(endpoint);
  const session = getStorage(config.storageKey);
  const formData = new FormData();
  Object.keys(params).forEach((key: string) => {
    formData.append(key, params[key]);
  });
  return axios.post(url, formData, {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });
};

const initInstance = () => {
  return {
    get,
    post,
    upload,
  };
};

export default initInstance();
