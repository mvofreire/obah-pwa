import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { GridView } from "components";

type Action = {
  label: string;
  path: string;
};

const data: Action[] = [
  {
    label: "Explore",
    path: "/explore",
  },
  {
    label: "Próximos de mim ",
    path: "/near-me",
  },
  {
    label: "Vouchers",
    path: "/vouchers",
  },
  {
    label: "Settings",
    path: "/config",
  },
];

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: 10,
  },
  action: {
    textAlign: "center",
    height: 150,
    background: theme.colors.light,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const HomeActions: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClickAction = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { to } = e.currentTarget.dataset;
      history.push(to as string);
    },
    [history]
  );

  return (
    <div className={classes.root}>
      <GridView
        data={data}
        columnsCount={2}
        renderItem={(item: Action) => (
          <div
            data-to={item.path}
            className={classes.action}
            onClick={handleOnClickAction}
          >
            {item.label}
          </div>
        )}
      />
    </div>
  );
};

export default HomeActions;
