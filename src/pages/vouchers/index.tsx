import React from "react";
import { Avatar, List } from "antd";
import { useMyVouchers } from "hooks/vouchers.hook";
import { Content } from "components";
import { formatDatePtBR } from "utils/date";
import { Link } from "react-router-dom";

const VoucherPage = () => {
  const { data, isLoading } = useMyVouchers();
  return (
    <Content padding={[0, 10]} center={isLoading}>
      <List
        dataSource={data}
        loading={isLoading}
        itemLayout="horizontal"
        renderItem={(item) => (
          <Link to={`/voucher/${item.id}`}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.promotionImages[0]} />}
                title={item.promotionTitle}
                description={
                  <small>
                    Expira em ${formatDatePtBR(new Date(item.expiration))}
                  </small>
                }
              />
            </List.Item>
          </Link>
        )}
      />
    </Content>
  );
};

export default VoucherPage;
