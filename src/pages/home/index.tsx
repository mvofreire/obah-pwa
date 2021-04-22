import { Content, PullToRefresh } from "components";
import HighlightPromotions from "./HighlightPromotions";
import HomeActions from "./HomeActions";
import StoreList from "./StoreList";
import { useCounterRefresh } from "hooks/counter.hook";

const HomePage = () => {
  const { counter, onRefresh } = useCounterRefresh();

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Content>
        <StoreList />
        <HighlightPromotions key={`promo-${counter}`} />
        <HomeActions key={`actions-${counter}`} />
      </Content>
    </PullToRefresh>
  );
};

export default HomePage;
