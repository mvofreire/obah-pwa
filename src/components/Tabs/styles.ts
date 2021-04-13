import { makeStyles } from "@material-ui/styles";

export const useTabStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
    height: 50,
    backgroundColor: theme.colors.primary,
  },
}));

export const useTabItemStyles = makeStyles({
  item: (p: any) => {
    return {
      height: "100%",
      padding: "0px 20px",
      display: "flex",
      alignItems: "center",
      color: p.active ? "#fff" : "#D4302C",
    };
  },
});
