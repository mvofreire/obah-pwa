import { useStores } from "hooks/store.hook";
import { Link } from "react-router-dom";
import { useStoreListStyle } from "./style";

const StoreList = () => {
  const { data } = useStores();
  const classes = useStoreListStyle();

  return (
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
    </div>
  );
};

export default StoreList;
