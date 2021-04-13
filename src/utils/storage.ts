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

export const clearStorage = (): void => {
  localStorage.clear();
};
