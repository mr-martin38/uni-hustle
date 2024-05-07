import "./App.css";
import Navbar from "./Navbar";
import Business from "./Business";
import Card from "./Card";
import { Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import ProductPage from "./Container/ProductPage";
import ProductModalBody from "./Container/ProductModalBody";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductPage />} />
      {/* <Route path="/services" element={<ProductModalBody />} /> */}
    </Routes>
  );
}

export default App;
