import React from "react";
import { Spin, Empty } from "antd";
import { useExplorePromotions } from "hooks/promotion.hook";
import { GridView, SectionContent } from "components";
import PromotionDetail from "./PromotionDetail";

const ExplorePromotions = () => {
  const { data, isLoading, isError } = useExplorePromotions();

  if (isError) {
    return <Empty />;
  }

  return (
    <Spin spinning={isLoading}>
      <SectionContent sectionKey="header-actions">
        <h2>Explorar</h2>
      </SectionContent>
      <div style={{ padding: "0px 10px" }}>
        <GridView
          data={data}
          columnsCount={3}
          renderItem={(promotion) => <PromotionDetail promotion={promotion} />}
        />
      </div>
    </Spin>
  );
};

export default ExplorePromotions;
