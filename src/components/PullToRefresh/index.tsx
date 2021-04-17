import { Spin, Typography } from "antd";
import React from "react";
import PullRefresh from "react-simple-pull-to-refresh";
import useStyle from "./style";

type PullToRefreshProps = {
  isPullable?: boolean;
  canFetchMore?: boolean;
  onRefresh: () => Promise<any>;
  onFetchMore?: () => Promise<any>;
  children: JSX.Element;
  pullDownThreshold?: number;
  fetchMoreThreshold?: number;
  maxPullDownDistance?: number;
  backgroundColor?: string;
  className?: string;
};

const PullContent = () => {
  const classes = useStyle();
  return (
    <div className={classes.pullContent}>
      <Typography.Text>Puxe para atualizar</Typography.Text>
    </div>
  );
};

const RefreshContent = () => {
  const classes = useStyle();
  return (
    <div className={classes.pullContent}>
      <Spin spinning={true} size="small" />
    </div>
  );
};

const PullToRefresh: React.FC<PullToRefreshProps> = (props) => (
  <PullRefresh
    {...props}
    pullingContent={<PullContent />}
    refreshingContent={<RefreshContent />}
  />
);
export { PullToRefresh };
