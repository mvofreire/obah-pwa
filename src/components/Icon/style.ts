import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  root: {
    fontSize: (p: any) => p.size,
    color: (p: any) => p.color,
  },
});
