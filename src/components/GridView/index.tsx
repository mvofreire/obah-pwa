import React from "react";
import { Col, Row } from "antd";

type GridViewProps<T> = {
  data: T[];
  columnsCount?: number;
  renderItem: (item: T) => React.ReactNode | undefined;
};

function GridView<T>(props: GridViewProps<T>) {
  const { data, columnsCount = 2, renderItem } = props;
  return (
    <Row gutter={[16, 16]}>
      {data?.map((item, i) => (
        <Col span={24 / columnsCount} key={`grid-view-item-${i}`}>
          {renderItem(item)}
        </Col>
      ))}
    </Row>
  );
}

export { GridView };
