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
  logo: {
    zIndex: 1000,
    display: "block",
    position: "relative",
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
