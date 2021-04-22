import React from "react";
import { Empty, Spin, Typography } from "antd";
import { PromotionCarousel, Image } from "components";
import { useHighlightPromotions } from "hooks/promotion.hook";
import { Link } from "react-router-dom";

const HighlightPromotions: React.FC = () => {
  const { data, isLoading, isError } = useHighlightPromotions();

  if (isError || (!isLoading && data?.length === 0)) {
    return <Empty />;
  }

  return (
    <Spin spinning={isLoading}>
      <PromotionCarousel
        data={data}
        renderItem={(promotion) => (
          <Link to={`/promotion/${promotion.id}`}>
            <Image cover src={promotion.images[0].path} height={150} />
            <Typography.Text>{promotion.title}</Typography.Text>
            <Typography.Text>{promotion.sub_title}</Typography.Text>
          </Link>
        )}
      />
    </Spin>
  );
};

export default HighlightPromotions;
