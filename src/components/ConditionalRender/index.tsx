import React from "react";

type ConditionalRenderProps = {
  condition: boolean | undefined;
  elseRender?: React.ReactNode;
};

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  children,
  condition,
  elseRender,
}) => {
  const render = !!condition ? children : !!elseRender && elseRender;
  return <>{render}</>;
};

export { ConditionalRender };
