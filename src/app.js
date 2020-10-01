import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";

import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-multi-carousel/lib/styles.css";

import backToTopVisibilty from "./backToTopVisibility";
backToTopVisibilty();

ReactDOM.render(<AppRouter />, document.getElementById("app"));
