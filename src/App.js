import "./App.css";
import React from "react";
import OrderPage from "./views/OrderPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaTable from "./views/Pizzatable";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
<<<<<<< HEAD
import Sidebar from "./components/Sidebar";
=======
import Favourites from "./views/Favourites";
import PastOrders from "./views/PastOrders";
>>>>>>> b48bdb4 (added past orders page, improved the favourite orders page)

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
