import "./App.css";
import React from "react";
import OrderPage from "./views/OrderPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaTable from "./views/Pizzatable.js";

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route end path="/" element={<OrderPage />} />
              <Route exact path="/favorites" element={ <PizzaTable />} />
          </Routes>
      </Router>
    
    </>
  );
}

export default App;
