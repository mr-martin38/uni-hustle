import "./App.css";
import Navbar from "./Navbar";
import Business from "./Business";
import Card from "./Card";
import { Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import ProductPage from "./Container/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
