import zIndex from "@material-ui/core/styles/zIndex";
import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@material-ui/core";
import { useMst } from "../common/store";
import { NavLink } from "../common/getNavlink";

const useStyles = makeStyles({
  AppBar: {
    Zindex: zIndex.drawer + 1,
  },
  Box: {
    flex: 1,
  },
});
// what is appbar & .drawer property ?
export const Navbar = () => {
  const classes = useStyles();
  const store = useMst();
  return (
    <React.Fragment>
      <div>
        <AppBar className={classes.AppBar} position="fixed" elevation={0}>
          <Toolbar>
            <Box className={classes.Box}>
              <Box pr={4} display="inline">
                <Typography variant="subtitle1" display="inline">
                  Takos
                </Typography>
                <Box display="inline">
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/Campiagns">Campaigns</NavLink>
                  <NavLink to="/Reporting">Reporting</NavLink>
                  <NavLink to="/Menu">Menu</NavLink>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};
