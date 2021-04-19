import React from "react";
import { useStorePromotions } from "hooks/store.hook";

type StorePromotionsProps = {
  storeId: string;
};
const StorePromotions: React.FC<StorePromotionsProps> = ({ storeId }) => {
  const { data } = useStorePromotions(storeId);
  console.log(data);
  return <div>asd</div>;
};

export default StorePromotions;
