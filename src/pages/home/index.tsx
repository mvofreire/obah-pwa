import React from "react";
import { Content } from "components";
import HighlightPromotions from "./HighlightPromotions";
import HomeActions from "./HomeActions";

const HomePage = () => (
  <Content>
    <HighlightPromotions />
    <HomeActions />
  </Content>
);

export default HomePage;
