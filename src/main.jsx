import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import client from "./apollo/client";
import App from "./App";
import { checkboxTheme } from "./customThemeChakra/checkBoxTheme";
import { switchTheme } from "./customThemeChakra/switchTheme";
import "./index.css";

const theme = extendTheme({
  components: {
    Switch: switchTheme,
    Checkbox: checkboxTheme,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </ApolloProvider>
);
