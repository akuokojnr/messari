import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";

import Application from "./components/Application";
import injectGlobalStyles from "./common/styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={injectGlobalStyles()} />
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
