import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

WebFont.load({
  google: {
    families: ["Ubuntu:500,700", "Open Sans"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
