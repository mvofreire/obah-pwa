import request from "utils/request";

export const loadMyVouchers = () => {
  return request.get("/vouchers");
};

export const loadVoucher = (id: string) => {
  return request.get(`/vouchers/${id}`);
};

export const createVoucher = (promotionId: string | number) => {
  return request.post("/client/add-voucher", {
    promotionId,
  });
};
