import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../redux";
import NavBar from "./Navbar";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavBar />
  </Provider>
);

export default App;
