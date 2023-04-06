import "./App.css";
import OrderPage from "./views/OrderPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route end path="/" element={<OrderPage />} />
              <Route path="/favorites" element={"favorites page to be created"} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
