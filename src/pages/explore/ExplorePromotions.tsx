import React from "react";
import { Spin, Empty } from "antd";
import { useExplorePromotions } from "hooks/promotion.hook";
import { GridView, Content } from "components";
import PromotionDetail from "./PromotionDetail";

const ExplorePromotions = () => {
  const { data, isLoading, isError } = useExplorePromotions();

  if (isError) {
    return <Empty />;
  }

  return (
    <Spin spinning={isLoading}>
      <Content padding={[0, 10]}>
        <GridView
          data={data}
          columnsCount={3}
          renderItem={(promotion) => <PromotionDetail promotion={promotion} />}
        />
      </Content>
    </Spin>
  );
};

export default ExplorePromotions;
