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
  style?: CSSProperties;
};

const Content: React.FC<ContentProps> = ({
  children,
  padding = 0,
  center = false,
  ...rest
}) => {
  const classes = useStyle({ padding });

  return (
    <div
      {...rest}
      className={clsx(classes.root, {
        [classes.centralize]: center,
      })}
    >
      {children}
    </div>
  );
};

export { Content };
