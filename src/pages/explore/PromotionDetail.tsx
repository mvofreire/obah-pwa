import React from "react";
import { Typography } from "antd";
import { makeStyles } from "@material-ui/styles";
import { IPromotion } from "interfaces/IPromotion";
import { Link } from "react-router-dom";
import { Image } from "components";

type PromotionDetailProps = {
  promotion: IPromotion;
};

const useStyles = makeStyles({
  root: {},
  image: {
    objectFit: "cover",
  },
});

const PromotionDetail: React.FC<PromotionDetailProps> = ({ promotion }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={`/promotion/${promotion.id}`}>
        <Image
          src={promotion.images[0].path}
          height={100}
          className={classes.image}
          cover
        />
        <Typography.Text>{promotion.title}</Typography.Text>
      </Link>
    </div>
  );
};

export default PromotionDetail;
