import React, { Component } from "react";

const useStyles = makeStyles({
  horizontalMenu: {
    textDecoration: "none",
    marginRight: "30px",
    color: "#fff",
  },
});

export const NavLink = () => {
  const classes = useStyles();
  return (
    <Button
      display="inline"
      className={`${classes.horizontalMenu} ${
        document.location.pathname == props.to ? classes.activeMenu : ""
      }`}
      component={Link}
      variant="text"
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
