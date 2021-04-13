import { IPromotion } from "interfaces/IPromotion";
import { useQuery } from "react-query";
import {
  loadHighlightPromotions,
  loadPopularPromotions,
  loadExplorePromotions,
  loadPromotion,
} from "services/promotion.service";
import { HookType } from "enums/hooks";

export const useHighlightPromotions = () => {
  const response = useQuery<IPromotion[]>(
    [HookType.explore, HookType.highlightPromotions],
    loadHighlightPromotions
  );
  return response;
};

export const usePopularPromotions = () => {
  return useQuery(
    [HookType.explore, HookType.popularPromotions],
    loadPopularPromotions
  );
};

export const useExplorePromotions = () => {
  return useQuery(
    [HookType.explore, HookType.explorePromotions],
    loadExplorePromotions
  );
};

export const usePromotion = (id: string) => {
  return useQuery<IPromotion>([HookType.promotion, id], () =>
    loadPromotion(id)
  );
};
