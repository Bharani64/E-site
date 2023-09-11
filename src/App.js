import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Cart } from "./Component/Cart";
import { Default } from "./Component/Default";
import { Navbar } from "./Component/Navbar";
import { ProductDetails } from "./Component/ProductDetails";
import { ProductList } from "./Component/ProductList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="details" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
