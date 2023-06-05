import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/base.css";
import "./css/weblog.css";

// APOLLO CLIENT
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// MATERIAL UI THEME
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

import { BrowserRouter } from "react-router-dom";

// GRAPHQL APOLLO CLIENT
const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clhnhmhbo5htw01umh8xxfxge/master",

  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
);
