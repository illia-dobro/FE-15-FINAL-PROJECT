import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about/About";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/contacts";
import Shop from "./pages/Shop";
import Login from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import Category from "./layouts/category";
import Footer from "./layouts/footer";
import Modal from "./components/Modal";
import ProductDetail from "./pages/productDetail";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/catalog" element={<Catalog />}>
            {/*Temporary solution for default route */}
            <Route
              index
              element={<Navigate to="/catalog/Bodycare" replace={true} />}
            />
            <Route path=":categoryName" element={<Category />} />
          </Route>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:url" element={<ProductDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
