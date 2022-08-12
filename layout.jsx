import { Route, Switch } from "@material-ui/core";
import React, { Component } from "react";
import { useMst } from "./store";
import { Navbar } from "./../components/navbar";

export const Layout = () => {
  const store = useMst();
  if (!store.isauthenticated) {
    store.authenticate();
  } else {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </React.Fragment>
    );
  }
};
