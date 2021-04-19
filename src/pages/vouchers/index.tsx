import {
  Content,
  Icon,
  Icons,
  PullToRefresh,
  SectionContent,
} from "components";
import { Avatar, List } from "antd";
import { useMyVouchers } from "hooks/vouchers.hook";
import { formatDatePtBR } from "utils/date";
import { Link } from "react-router-dom";

const VoucherPage = () => {
  const { data, isLoading, refetch } = useMyVouchers();

  return (
    <PullToRefresh onRefresh={refetch}>
      <Content padding={[0, 10]}>
        <SectionContent sectionKey="header-actions">
          <Icon
            name={Icons.ReloadOutlined}
            spin={isLoading}
            onClick={() => refetch()}
          />
        </SectionContent>
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
                      Expira em {formatDatePtBR(new Date(item.expiration))}
                    </small>
                  }
                />
              </List.Item>
            </Link>
          )}
        />
      </Content>
    </PullToRefresh>
  );
};

export default VoucherPage;
