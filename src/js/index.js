import React from "react";
import reactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import App from "./components/app/app";
import reducer from "./store/reducer/reducer";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

reactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
