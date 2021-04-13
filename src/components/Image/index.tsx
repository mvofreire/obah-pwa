import React from "react";
import { CSSProperties } from "@material-ui/styles";
import { Spin } from "antd";
import { Img } from "react-image";
import useStyle from "./style";
import { Content } from "components/Content";
type ImageProps = {
  src: string | string[];
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  className?: string;
  cover?: boolean;
};

const Image: React.FC<ImageProps> = ({
  src,
  width = "100%",
  height = "100%",
  cover = false,
  ...rest
}) => {
  const classes = useStyle({ width, height, cover });
  return (
    <div className={classes.container}>
      <Img
        src={src}
        loader={
          <Content center>
            <Spin spinning />
          </Content>
        }
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
};

export { Image };
