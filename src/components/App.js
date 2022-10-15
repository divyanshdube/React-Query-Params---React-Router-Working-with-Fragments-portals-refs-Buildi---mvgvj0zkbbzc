import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import EmployeeDetails from "./EmployeeDetails";

const App = () => {
  //Write your code here
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
