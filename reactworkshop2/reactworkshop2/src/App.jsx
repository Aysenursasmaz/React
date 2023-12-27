import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/Product/AddProduct";
import ProductDetails from "./pages/Product/ProductDetails";

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<p>Not Found</p>}></Route>
        <Route path="/products/add" element={<AddProduct/>}></Route>
        <Route path="/product-detail/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
}

export default App;
