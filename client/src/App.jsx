import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";
import Card from "./pages/cart";
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
