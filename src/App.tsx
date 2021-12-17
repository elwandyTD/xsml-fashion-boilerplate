import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import theme from "./theme";
import { store } from "./redux/store";
import { MainNavigation } from "./navigations";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <MainNavigation />
      </Router>
    </Provider>
  </ChakraProvider>
);
