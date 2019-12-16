import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import Router from "./router";
import { theme } from "./utils/theme";

const Main = () => (
  <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <Router />
    </PaperProvider>
  </StoreProvider>
);

export default Main;
