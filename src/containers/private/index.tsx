import React, { Suspense, useCallback, useEffect, createRef } from "react";
import { Col, Layout, Row, Spin } from "antd";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {
  Logo,
  Tabs,
  TabsRef,
  Content as ObahContent,
  Section,
} from "components";
import { tabItems } from "./tabs.config";
import useStyle from "./style";

const HomePage = React.lazy(() => import("pages/home"));
const ExplorePage = React.lazy(() => import("pages/explore"));
const NearMePage = React.lazy(() => import("pages/near-me"));
const VoucherPage = React.lazy(() => import("pages/vouchers"));
const ConfigPage = React.lazy(() => import("pages/config"));

const PromotionDetail = React.lazy(() => import("pages/promotion-detail"));
const VoucherDetail = React.lazy(() => import("pages/voucher-detail"));
const StoreDetail = React.lazy(() => import("pages/store-detail"));

const { Header, Content, Footer } = Layout;

function App() {
  let tabsRef = createRef<TabsRef>();
  const classes = useStyle();
  const history = useHistory();

  const setLocationChange = useCallback(
    ({ pathname }: any) => {
      const route = Object.values(tabItems).find((f) => f.path === pathname);
      if (route) {
        const { tabKey } = route;
        tabsRef.current?.SetActiveKey(tabKey);
      }
    },
    [tabsRef]
  );

  useEffect(() => {
    const unregister = history.listen(setLocationChange);
    setLocationChange(history.location);
    return () => {
      unregister();
    };
  }, [history, setLocationChange]);

  const changePage = useCallback(
    (key: string) => {
      const to = tabItems[key].path;
      history.push(to);
    },
    [history]
  );

  const suspenceFallback = (
    <ObahContent center>
      <Spin spinning />
    </ObahContent>
  );
  return (
    <Layout className={classes.root}>
      <Header className={classes.header}>
        <Row
          className={classes.headerGrid}
          align="middle"
          justify="space-between"
        >
          <Col flex="130px">
            <Logo className={classes.logo} onClick={() => changePage("home")} />
          </Col>
          <Col flex="auto" className={classes.actions}>
            <Section sectionKey="header-actions" />
          </Col>
        </Row>
      </Header>
      <Content className={classes.content}>
        <Suspense fallback={suspenceFallback}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/near-me" component={NearMePage} />
            <Route path="/vouchers" component={VoucherPage} />
            <Route path="/config" component={ConfigPage} />
            <Route path="/promotion/:id" component={PromotionDetail} />
            <Route path="/voucher/:id" component={VoucherDetail} />
            <Route path="/store/:id" component={StoreDetail} />
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </Content>
      <Footer className={classes.footer}>
        <Tabs
          ref={tabsRef}
          onChange={changePage}
          defaultActiveKey="home"
          items={Object.values(tabItems)}
        />
      </Footer>
    </Layout>
  );
}

export default App;
