import { makeStyles } from "@material-ui/styles";

export default makeStyles({});

export const useStoreListStyle = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    overflowX: "auto",
    padding: '20px 0px',
  },
  item: {
    position: "relative",
    minWidth: 67,
    maxWidth: 67,
    minHeight: 67,
    maxHeight: 67,
    marginRight: 14,
    "&:first-child": {
      marginLeft: 14,
    }
  },

  store: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    boxShadow: "0px 7px 7px 2px rgb(0 0 0 / 14%)",
    "& img": {
      width: "100%",
      objectFit: "cover",
    },
  },
});
