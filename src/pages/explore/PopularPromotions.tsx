import React from "react";
import { Spin, Empty, Typography } from "antd";
import { usePopularPromotions } from "hooks/promotion.hook";
import { PromotionCarousel, Image } from "components";
import { Link } from "react-router-dom";

const PopularPromotions = () => {
  const { data, isLoading, isError } = usePopularPromotions();

  if (isError) {
    return <Empty />;
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
