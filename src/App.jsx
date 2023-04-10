import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import img from "./assets/hardy.png";

const App = () => {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
    </div>
  );
};

export default App;
