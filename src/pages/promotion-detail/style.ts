import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: any) => ({
  root: {
    position: "relative",
    height: "100%",
  },
  header: {
    position: "relative",
    height: 200,
  },
  body: {
    position: "relative",
    padding: "5px 10px",
  },
  pageHeader: {
    padding: "0px 10px",
    backgroundColor: theme.colors.white,
    boxShadow: `0px 10px 40px 40px ${theme.colors.white}`,
  },
  banner: {
    position: "absolute",
    width: "100%",
    "& img": {
      objectFit: "cover",
    },
  },
}));
