import React from "react";
import { Spin, Empty, Typography } from "antd";
import { usePopularPromotions } from "hooks/promotion.hook";
import { PromotionCarousel, Image } from "components";
import { Link } from "react-router-dom";

const PopularPromotions = () => {
  const { data, isLoading } = usePopularPromotions();

  if (!isLoading && data.length===0) {
    return <Empty description=':( - Nada a ser visto por aqui ainda!'/>;
  }

  return (
    <Spin spinning={isLoading}>
      <PromotionCarousel
        data={data}
        renderItem={(promotion) => (
          <Link to={`/promotion/${promotion.id}`}>
            <Image src={promotion.images[0].path} height={150} cover />
            <Typography.Text>{promotion.title}</Typography.Text>
            <Typography.Text>{promotion.sub_title}</Typography.Text>
          </Link>
        )}
      />
    </Spin>
  );
};

export default PopularPromotions;
