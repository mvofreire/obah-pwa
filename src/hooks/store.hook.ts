import { HookType } from "enums/hooks";
import { IStore } from "interfaces/IStore";
import { useQuery } from "react-query";
import {
  loadAllStores,
  loadStore,
  loadStorePromotions,
} from "services/store.service";

export const useStores = () => {
  return useQuery<IStore[]>(HookType.stores, loadAllStores);
};

export const useStore = (id: string) => {
  return useQuery<IStore>(HookType.store, () => loadStore(id));
};

export const useStorePromotions = (storeId: string) => {
  return useQuery([HookType.storePromotions, storeId], () =>
    loadStorePromotions(storeId)
  );
};
