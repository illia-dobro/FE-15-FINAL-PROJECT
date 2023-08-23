import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./layouts/nav";
import Home from "./pages/home";
import About from "./pages/about/About";
import Catalog from "./pages/catalog";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/contacts";
import Shop from "./pages/shop";
import Login from "./pages/Client";
import PageNotFound from "./pages/PageNotFound";
import Category from "./layouts/category";
import Footer from "./layouts/footer";
import ProductDetail from "./pages/productDetail";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "../src/layouts/forms/SignUp";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import { useEffect } from "react";
import { initializeCart } from "./app/slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateAndUpdateCartMutation,
  useGetCartQuery,
} from "./app/services/cartApi.js";
import { combineUniqueProducts } from "./helpers/combineUniqueProducts.js";

function App() {
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.cart.products);
  const isLoggedIn = useSelector((state) => state.auth.user);
  const { data: serverCart, isSuccess: isServerCartSuccess } =
    useGetCartQuery();
  const localCartData = JSON.parse(localStorage.getItem("products"));
  const [updateCart] = useCreateAndUpdateCartMutation();

  useEffect(() => {
    if (!isLoggedIn && localCartData) {
      dispatch(initializeCart(localCartData));
      localStorage.removeItem("products");
    }
    if (isLoggedIn && isServerCartSuccess && stateCart.length) {
      const updateCartOnLogin = async () => {
        // @TODO add products quantity counter
        const mergedCart = combineUniqueProducts(
          serverCart?.products,
          stateCart
        );
        console.log("serverCart:", serverCart?.products);
        console.log("stateCart:", stateCart);
        console.log("merged:", mergedCart);
        const updatedCart = await updateCart({ products: mergedCart });
        console.log("updated:", updatedCart);
      };
      updateCartOnLogin().then(dispatch(initializeCart([])));
    }
  }, [dispatch, isLoggedIn, serverCart, isServerCartSuccess]);

  useEffect(() => {
    const saveData = () => {
      if (!isLoggedIn && stateCart.length)
        localStorage.setItem("products", JSON.stringify(stateCart));
      console.log(!isLoggedIn);
    };
    window.addEventListener("beforeunload", saveData);
    return () => {
      window.removeEventListener("beforeunload", saveData);
    };
  }, [isLoggedIn, stateCart]);

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
