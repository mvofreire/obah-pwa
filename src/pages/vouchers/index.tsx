import { Content, PullToRefresh } from "components";
import { useCounterRefresh } from "hooks/counter.hook";
import VoucherList from "./VoucherList";

const VoucherPage = () => {
  const { counter, onRefresh } = useCounterRefresh();
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Content padding={[0, 10]}>
        <VoucherList key={`voucher-list-${counter}`} />
      </Content>
    </PullToRefresh>
  );
};

export default VoucherPage;
