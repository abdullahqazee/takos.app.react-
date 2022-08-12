import React, { Component } from "react";
import { types as t } from "mobx-state-tree";
import { useContext } from "react";
import { User } from "../models/User";

const Store = t
  .model("store", {
    user: t.optional(User, {}),
  })
  .actions((self) => {});
export const store = Store.React();
const storeContext = React.createContext(store);
export const Provider = storeContext.Provider;
export default () => useContext(storeContext);

export function useMst() {
  const store = useContext(storeContext);
  if (storeContext === null) {
    throw new Error("store cannot be null,please add a context provider");
  }
  return store;
}
