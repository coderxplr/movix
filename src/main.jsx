import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>  // it calls api twice to check if the response is same on both the times or not.
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
