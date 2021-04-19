import { Divider } from "antd";
import PopularPromotions from "./PopularPromotions";
import ExplorePromotions from "./ExplorePromotions";
import {
  Content,
  Icon,
  Icons,
  PullToRefresh,
  SectionContent,
} from "components";
import { useCounterRefresh } from "hooks/counter.hook";

const ExplorePage = () => {
  const { counter, onRefresh } = useCounterRefresh();
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Content>
        <SectionContent sectionKey="header-actions">
          <Icon name={Icons.PlusCircleFilled} />
        </SectionContent>
        <PopularPromotions key={`popular-${counter}`} />
        <Divider />
        <ExplorePromotions key={`explore-${counter}`} />
      </Content>
    </PullToRefresh>
  );
};

export default ExplorePage;
