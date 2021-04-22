export const getStorage = (key: string): Record<string, string> | null => {
  const data = localStorage.getItem(key);
  let result = null;
  if (data) {
    result = JSON.parse(data);
  }
  return result;
};

export const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearStorage = (): void => {
  localStorage.clear();
};
