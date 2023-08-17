import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, ScrollRestoration
} from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about/About";
import Catalog from "./pages/catalog";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/contacts";
import Shop from "./pages/Shop";
import Login from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import Category from "./layouts/category";
import Footer from "./layouts/footer";
import Modal from "./components/Modal";
import ProductDetail from "./pages/productDetail";
import ProfilePage from "./pages/ProfilePage"
import { useGetUserQuery } from "./app/services/api";
import SignUp from '../src/layouts/forms/SignUp'

import SmoothScroll from "./components/smoothScroll/SmoothScroll";
function App() {
  useGetUserQuery();

  return (
    <>
      <Router>
        <SmoothScroll>
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
          <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:url" element={<ProductDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </Router>
    </>
  );
}

export default App;
