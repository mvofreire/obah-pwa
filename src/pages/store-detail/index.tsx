import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { PageHeader, Spin } from "antd";
import { Content } from "components";

import StorePromotions from "./StorePromotions";

import { useStore } from "hooks/store.hook";

const StoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { data, isLoading } = useStore(id);

  return (
    <Content>
      <Spin spinning={isLoading}>
        <PageHeader
          title={data?.name}
          subTitle={data?.email}
          onBack={history.goBack}
        />
        <StorePromotions storeId={id} />
      </Spin>
    </Content>
  );
};

export default StoreDetail;
