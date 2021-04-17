import React from "react";
import { Divider } from "antd";
import PopularPromotions from "./PopularPromotions";
import ExplorePromotions from "./ExplorePromotions";
import { Content, PullToRefresh } from "components";
import { useCounterRefresh } from "hooks/counter.hook";

const ExplorePage = () => {
  const { counter, onRefresh } = useCounterRefresh();
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Content>
        <PopularPromotions key={`popular-${counter}`} />
        <Divider />
        <ExplorePromotions key={`explore-${counter}`} />
      </Content>
    </PullToRefresh>
  );
};

export default ExplorePage;
