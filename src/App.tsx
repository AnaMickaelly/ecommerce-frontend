import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Product from "./pages/Product";
import "./styles.scss";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
