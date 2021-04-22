import React from "react";
import { useStorePromotions } from "hooks/store.hook";
import { Content, GridView, Image } from "components";
import { IPromotion } from "interfaces/IPromotion";
import { Link } from "react-router-dom";
import { Spin, Typography } from "antd";

type StorePromotionsProps = {
  storeId: string;
};
const StorePromotions: React.FC<StorePromotionsProps> = ({ storeId }) => {
  const { data, isLoading } = useStorePromotions(storeId);
  return (
    <Spin spinning={isLoading}>
      <Content padding={[0, 10]}>
        <Typography.Title level={4}>Promoções</Typography.Title>
        <GridView
          data={data as IPromotion[]}
          columnsCount={2}
          renderItem={(promotion) => (
            <Link to={`/promotion/${promotion.id}`}>
              <Image src={promotion.images[0].path} height={150} cover />
              <Typography.Text>{promotion.title}</Typography.Text>
              <Typography.Text>{promotion.sub_title}</Typography.Text>
            </Link>
          )}
        />
      </Content>
    </Spin>
  );
};

export default StorePromotions;
