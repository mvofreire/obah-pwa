// @ts-nocheck
import { CSSProperties, FC } from "react";
import useStyle from "./style";
import { Icons } from "./types";
import * as AntIcons from "@ant-design/icons";

type IconProps = {
  name: Icons;
  size?: number;
  color?: string;
  spin?: boolean;
  rotate?: number;
  twoTone?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color = "#fff",
  spin = false,
  rotate,
  twoTone,
  onClick,
  ...rest
}) => {
  const classes = useStyle({ size, color });
  const IconComponent = AntIcons[name];
  return (
    <span className={classes.root} {...rest}>
      <IconComponent
        spin={spin}
        rotate={rotate}
        twoToneColor={twoTone}
        onClick={onClick}
      />
    </span>
  );
};

export { Icon, Icons };
