import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { switchTheme } from "./customThemeChakra/switchTheme";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { checkboxTheme } from "./customThemeChakra/checkBoxTheme";

const theme = extendTheme({
  components: {
    Switch: switchTheme,
    Checkbox: checkboxTheme,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>
);
