import request from "utils/request";

export const loadHighlightPromotions = () => {
  return request.get("/highlight-promotions");
};

export const loadPopularPromotions = () => {
  return request.get("/popular-promotions");
};

export const loadExplorePromotions = () => {
  return request.get("/explore-promotions");
};

export const loadPromotion = (id: string) => {
  return request.get(`/promotion/${id}`);
};

export const loadPromotionsInBounds = (
  north: number,
  south: number,
  east: number,
  west: number
) => {
  return request.get("/promotion-in-bounds", {
    north,
    south,
    east,
    west,
  });
};
