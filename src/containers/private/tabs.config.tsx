import {
  HomeFilled,
  CompassFilled,
  SettingFilled,
  SearchOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";

type TabConfig = {
  tabKey: string;
  icon: React.ReactNode;
  path: string;
};

export const tabItems: Record<string, TabConfig> = {
  home: {
    tabKey: "home",
    icon: <HomeFilled />,
    path: "/home",
  },
  explore: {
    tabKey: "explore",
    icon: <SearchOutlined />,
    path: "/explore",
  },
  "near-me": {
    tabKey: "near-me",
    icon: <CompassFilled />,
    path: "/near-me",
  },
  vouchers: {
    tabKey: "vouchers",
    icon: <BarcodeOutlined />,
    path: "/vouchers",
  },
  config: {
    tabKey: "config",
    icon: <SettingFilled />,
    path: "/config",
  },
};
