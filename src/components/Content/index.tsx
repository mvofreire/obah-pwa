import React from "react";
import useStyle from "./style";
import clsx from "clsx";
import { CSSProperties } from "@material-ui/styles";

type ContentProps = {
  center?: boolean;
  padding?:
    | number
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  direction?: "horizontal" | "vertical";
  style?: CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
};

const Content: React.FC<ContentProps> = ({
  children,
  padding = 0,
  center = false,
  direction = "horizontal",
  className,
  width = "100%",
  height = "100%",
  ...rest
}) => {
  const classes = useStyle({ padding, direction, width, height });

  return (
    <div
      {...rest}
      className={clsx(classes.root, className, {
        [classes.centralize]: center,
      })}
    >
      {children}
    </div>
  );
};

export { Content };
