import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import Login from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import Modal from './components/Modal'
import Footer from './layouts/footer'
import Modal from "./components/Modal";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:url" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;