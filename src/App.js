import "./App.css";
import OrderPage from "./views/OrderPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaTable from "./views/Pizzatable";

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route end path="/" element={<OrderPage />} />
              <Route path="/favorites" element={ <PizzaTable />} />
          </Routes>
      </Router>
    
    </>
  );
}

export default App;
