import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: any) => ({
  root: {},
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    padding: "0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.primary,
  },
  headerGrid: {
    width: "100%",
    "& div": {
      height: 64,
    },
  },
  actions: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    zIndex: 1000,
    height:45,
    margin: "10px 0px",
  },
  content: {
    height: "calc(100vh - 115px)",
    marginTop: 64,
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
    zIndex: 0,
  },

  footer: {
    position: "fixed",
    padding: 0,
    bottom: 0,
    width: "100%",
  },
}));
