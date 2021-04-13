import { Carousel } from "antd";
import { IPromotion } from "interfaces/IPromotion";

type PromotionCarouselProps = {
  data?: IPromotion[];
  renderItem: (promotion: IPromotion) => React.ReactNode;
};

const PromotionCarousel: React.FC<PromotionCarouselProps> = ({
  data,
  renderItem,
  ...rest
}) => {
  return (
    <Carousel {...rest}>
      {data?.map((promotion) => (
        <div key={`promotion-${promotion.id}`}>{renderItem(promotion)}</div>
      ))}
    </Carousel>
  );
};

export { PromotionCarousel };
