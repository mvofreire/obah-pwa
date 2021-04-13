import React, {
  MouseEvent,
  useCallback,
  useState,
  useImperativeHandle,
  forwardRef,
  Ref,
} from "react";
import { useTabStyles, useTabItemStyles } from "./styles";

type TabItemProps = {
  tabKey: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: (event: any) => void;
};

const TabItem: React.FC<TabItemProps> = ({ tabKey, icon, active, onClick }) => {
  const classes = useTabItemStyles({ active });
  return (
    <li data-key={tabKey} className={classes.item} onClick={onClick}>
      <span style={{ fontSize: 20 }}>{icon}</span>
    </li>
  );
};

type TabsProps = {
  defaultActiveKey: string;
  items: TabItemProps[];
  onChange?: (key: string) => void;
};
export type TabsRef = {
  SetActiveKey: (key: string) => void;
};
const Tabs = forwardRef((props: TabsProps, ref: Ref<TabsRef>) => {
  const { defaultActiveKey, items, onChange } = props;
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const classes = useTabStyles();

  useImperativeHandle(ref, () => ({ SetActiveKey }));

  function SetActiveKey(key: string) {
    setActiveKey(key);
  }

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { key } = e.currentTarget.dataset;
      setActiveKey(key as string);
      !!onChange && onChange(key as string);
    },
    [onChange]
  );

  return (
    <ul className={classes.root}>
      {items.map((item, i) => {
        return (
          <TabItem
            {...item}
            key={`tab-item-${i}`}
            onClick={handleOnClick}
            tabKey={item.tabKey}
            active={activeKey === item.tabKey}
          />
        );
      })}
    </ul>
  );
});

export { Tabs };
