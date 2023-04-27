import "./App.css";
import React from "react";
import OrderPage from "./views/OrderPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaTable from "./views/Pizzatable";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Favourites from "./views/Favourites";
import PastOrders from "./views/PastOrders";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route end path="/" element={<HomePage />} />
          <Route end path="/order" element={<OrderPage />} />
          <Route end path="/past-orders" element={<PastOrders />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
      </Router>

    </>
  );
}

export default App;
