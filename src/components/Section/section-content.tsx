import { PureComponent } from "react";
import ReactDOM from "react-dom";

type SectionContentProps = {
  sectionKey: string;
};

export default class SectionContent extends PureComponent<SectionContentProps> {
  element: HTMLDivElement;
  container: HTMLDivElement | null;
  constructor(props: SectionContentProps | Readonly<SectionContentProps>) {
    super(props);
    const { sectionKey } = this.props;
    this.element = document.createElement("div");
    this.container = document.querySelector(`[data-section-key=${sectionKey}]`);
  }

  componentDidMount() {
    this.container?.appendChild(this.element);
  }

  componentWillUnmount() {
    this.container?.removeChild(this.element);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.element);
  }
}
