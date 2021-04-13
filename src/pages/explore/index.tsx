import React from "react";
import { Divider } from "antd";
import PopularPromotions from "./PopularPromotions";
import ExplorePromotions from "./ExplorePromotions";
import { Content } from "components";
const ExplorePage = () => {
  return (
    <Content>
      <PopularPromotions />
      <Divider />
      <ExplorePromotions />
    </Content>
  );
};

export default ExplorePage;
