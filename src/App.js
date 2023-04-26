import "./App.css";
import React from "react";
import OrderPage from "./views/OrderPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaTable from "./views/Pizzatable";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route end path="/" element={<HomePage />} />
          <Route end path="/order" element={<OrderPage />} />
          <Route path="/favorites" element={<PizzaTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
      </Router>

    </>
  );
}

export default App;
