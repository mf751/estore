import React from "react";

export type Mode = "dark" | "light";

type AppState = {
  mode: Mode;
};

const initialState: AppState = {
  mode: localStorage.getItem("mode")
    ? (localStorage.getItem("mode") as Mode)
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
};

type Action = { type: "SWITCH_MODE" };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SWITCH_MODE": {
      const m = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", m);
      return {
        ...state,
        mode: m,
      };
    }
    default:
      return state;
  }
}

type StoreType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const Store = React.createContext<StoreType | undefined>(undefined);

function StoreProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }} {...props} />;
}

function useStore() {
  const ctx = React.useContext(Store);
  if (!ctx) {
    throw new Error("useStore must be inside StoreProvider");
  }
  return ctx;
}

export { Store, StoreProvider, useStore };
