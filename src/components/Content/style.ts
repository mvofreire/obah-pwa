import { makeStyles } from "@material-ui/styles";
export default makeStyles({
  root: {
    position: "relative",
    height: "100%",
    padding: (p: any) =>
      Array.isArray(p.padding)
        ? p.padding.map((i: number) => `${i}px`).join(" ")
        : `${p.padding}px`,
  },

  centralize: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
