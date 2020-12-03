import React from "react";
import reactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";

reactDOM.render(
    <Provider>
      <App/>
    </Provider>
);
