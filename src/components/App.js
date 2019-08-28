import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../redux";
import NavBar from "./Navbar";
import Main from "./Main";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavBar />
    <Main />
  </Provider>
);

export default App;
