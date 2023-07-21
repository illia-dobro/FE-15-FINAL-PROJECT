
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
import Button from "./components/buttons/Button";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Button className="button-color--primary button" childrens={<><b>"HELLLOOOOOOOOOOO444444444</b> <p>fff</p></>}/>
        <Button className="button-color--primary button" childrens={<><b>"HELLLOOOOOOOOOOO444444444</b> <p>fff</p></>}/>
        <Button className="button-color--secondary button" childrens="HELLLOOOOOOOOOOOOO"/>

        <Routes>
          
          <Route path="/" element={<Home />} index/>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about"  element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
