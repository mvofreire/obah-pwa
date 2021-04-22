import request from "utils/request";

export const loadAllStores = () => {
  return request.get("/store");
};

export const loadStore = (id: string) => {
  return request.get(`/store/${id}`);
};

export const loadStorePromotions = (storeId: string) => {
  return request.get(`/store/${storeId}/promotions`);
};
