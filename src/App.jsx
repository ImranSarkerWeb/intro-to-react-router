import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./assets/components/Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      This is app.js
      <Outlet></Outlet>
    </div>
  );
};

export default App;
