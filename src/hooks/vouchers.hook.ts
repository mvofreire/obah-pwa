import { IVoucher } from "interfaces/IVoucher";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  loadMyVouchers,
  createVoucher,
  loadVoucher,
} from "services/voucher.service";
import { HookType } from "enums/hooks";

export const useMyVouchers = () => {
  return useQuery<IVoucher[]>(HookType.myVouchers, loadMyVouchers);
};

export const useVoucher = (id: string) => {
  return useQuery<IVoucher>(HookType.voucher, () => loadVoucher(id));
};

export const useVoucherCreate = () => {
  const queryClient = useQueryClient();
  return useMutation(createVoucher, {
    onSuccess: () => {
      queryClient.invalidateQueries(HookType.myVouchers);
      queryClient.invalidateQueries(HookType.promotion);
    },
  });
};
