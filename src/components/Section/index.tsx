import React, { CSSProperties } from "react";
import SectionContent from "./section-content";
type SectionProps = {
  sectionKey: string;
  className?: string;
  style?: CSSProperties;
};
const Section: React.FC<SectionProps> = ({ sectionKey, ...rest }) => (
  <div {...rest} data-section-key={sectionKey} />
);

export { Section };
export { SectionContent };
