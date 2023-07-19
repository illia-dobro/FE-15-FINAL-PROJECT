import { Link} from "react-router-dom";
import Logo from "../logo/Logo";

function Nav() {

  return (
    <nav className="nav">
      <Logo/>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/delivery">Delivery</Link>
      <Link to="/shop">Shop-icon</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;
