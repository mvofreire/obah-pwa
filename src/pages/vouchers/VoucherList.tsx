import { Avatar, List } from "antd";
import { useMyVouchers } from "hooks/vouchers.hook";
import { formatDatePtBR } from "utils/date";
import { Link } from "react-router-dom";

const VoucherList = () => {
  const { data, isLoading } = useMyVouchers();
  return (
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
  );
};

export default VoucherList;
