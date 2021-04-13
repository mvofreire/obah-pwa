import React from "react";
import { Col, Row } from "antd";

type GridViewProps = {
  data: any[];
  columnsCount?: number;
  renderItem: (item: any) => React.ReactNode | undefined;
};
const GridView: React.FC<GridViewProps> = ({
  data,
  columnsCount = 2,
  renderItem,
}) => {
  return (
    <Row gutter={[16, 16]}>
      {data?.map((item, i) => (
        <Col span={24 / columnsCount} key={`grid-view-item-${i}`}>
          {renderItem(item)}
        </Col>
      ))}
    </Row>
  );
};

export { GridView };
