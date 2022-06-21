import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { intercept } from "./networking";

const configureStore = store();
intercept(configureStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// 