import { makeStyles } from "@material-ui/styles";

const directions: Record<string, any> = {
  vertical: "column",
  horizontal: "row",
};

export default makeStyles({
  root: {
    position: "relative",
    height: (p: any) => p.height,
    width: (p: any) => p.width,
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
    flexDirection: (p: any) => directions[p.direction],
  },
});
