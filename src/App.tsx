import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import { MainNavigation } from "./navigations";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <MainNavigation />
    </Router>
  </ChakraProvider>
)
