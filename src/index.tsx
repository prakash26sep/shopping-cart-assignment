import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import React from "react";
import "./assets/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import theme from "./utils/theme";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
