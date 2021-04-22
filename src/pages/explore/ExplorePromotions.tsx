import React from "react";
import { Spin, Empty } from "antd";
import { useExplorePromotions } from "hooks/promotion.hook";
import { GridView, Content } from "components";
import PromotionDetail from "./PromotionDetail";
import { IPromotion } from "interfaces/IPromotion";

const ExplorePromotions = () => {
  const { data, isLoading } = useExplorePromotions();

  if (!isLoading && data.length === 0) {
    return <Empty description=":( Nada a ser visto por aqui." />;
  }

  return (
    <Spin spinning={isLoading}>
      <Content padding={[0, 10]}>
        <GridView<IPromotion>
          data={data}
          columnsCount={3}
          renderItem={(promotion) => <PromotionDetail promotion={promotion} />}
        />
      </Content>
    </Spin>
  );
};

export default ExplorePromotions;
