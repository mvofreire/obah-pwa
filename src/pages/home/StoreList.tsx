import { Spin } from "antd";
import { useStores } from "hooks/store.hook";
import { Content } from "components";
import { Link } from "react-router-dom";
import { useStoreListStyle } from "./style";

const StoreList = () => {
  const { data, isLoading, isError } = useStores();
  const classes = useStoreListStyle();

  if (isError || (!isLoading && data?.length === 0)) {
    return null;
  }

  return (
    <Content height={100}>
      <Spin spinning={isLoading}>
        <div className={classes.root}>
          {data?.map((item) => (
            <div key={`store-${item.id}`} className={classes.item}>
              <Link to={`/store/${item.id}`}>
                <div className={classes.store}>
                  <img src={item.image} alt="Store" />
                </div>
              </Link>
            </div>
          ))}
          {data?.map((item) => (
            <div key={`store-${item.id}`} className={classes.item}>
              <Link to={`/store/${item.id}`}>
                <div className={classes.store}>
                  <img src={item.image} alt="Store" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Spin>
    </Content>
  );
};

export default StoreList;
