import React from "react";
import { useVoucher } from "hooks/vouchers.hook";
import { useHistory, useParams } from "react-router-dom";
import { PageHeader, Spin } from "antd";
import { Content } from "components";

const VoucherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data, isLoading } = useVoucher(id);

  return (
    <Content>
      <Spin spinning={isLoading}>
        <PageHeader
          title={data?.promotionTitle}
          subTitle={data?.expiration}
          onBack={history.goBack}
        />
      </Spin>
    </Content>
  );
};

export default VoucherDetail;
