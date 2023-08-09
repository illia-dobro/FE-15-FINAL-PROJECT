import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages";
import About from "./pages/About";
import Catalog from "./pages/catalog";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import Login from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import Category from "./layouts/category";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/catalog" element={<Catalog />}>
            {/*Temporary solution for default route */}
            {/*<Route index element={<Navigate to="/catalog/care" replace={true}/>}/>*/}
            <Route path=":categoryName" element={<Category />} />
          </Route>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
