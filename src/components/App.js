import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../redux";

const store = configureStore();

const App = () => (
  <Provider store={store}>

  </Provider>
);

export default App;
