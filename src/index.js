import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "whitesmoke",
  bakgroundColor: "#111",
}

const lightTheme = {
  textColor: "#111",
  bakgroundColor: "whitesmoke",
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
