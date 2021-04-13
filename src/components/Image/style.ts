import { makeStyles } from "@material-ui/styles";
export default makeStyles({
  container: {
    width: (p: any) => p.width,
    height: (p: any) => p.height,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      objectFit: (p) => (p.cover ? "cover" : "unset"),
    },
  },
});
