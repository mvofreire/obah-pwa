import { Content, PullToRefresh } from "components";
import HighlightPromotions from "./HighlightPromotions";
import HomeActions from "./HomeActions";
import { useCounterRefresh } from "hooks/counter.hook";

const HomePage = () => {
  const { counter, onRefresh } = useCounterRefresh();

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Content>
        <HighlightPromotions key={`promo-${counter}`} />
        <HomeActions key={`actions-${counter}`} />
      </Content>
    </PullToRefresh>
  );
};

export default HomePage;
