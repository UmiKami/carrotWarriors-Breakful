import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Layout from "./layout";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>
);