import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Main from "./components/Main";

/* Import and destructure main from src/component/index.js
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);
