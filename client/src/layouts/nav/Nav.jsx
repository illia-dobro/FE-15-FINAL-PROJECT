import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GoPerson, GoSearch } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbMenu } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import useDeviceType from "../../helpers/getDeviceType";
import "./nav.scss";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../app/slices/searchSlice.js";
import Search from "../../components/search";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import signature from '../../assets/images/signature.png';

function Nav() {
  const { isMobile } = useDeviceType();
  const [onOpenNav, setOnOpenNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const stateCart = useSelector((state) => state.cart.products);

  const calculateCartQty = () =>
    stateCart.reduce((total, product) => total + product.cartQuantity, 0);

  const dispatch = useDispatch();
  const NavLink = ({ to, children, className = "nav__link" }) => (
    <Link className={className} to={to} onClick={() => setOnOpenNav(false)}>
      {children}
    </Link>
  );

  const isSearchOpened = useSelector((state) => state.search.isSearchOpened);
  const handleSearch = () => {
    dispatch(toggleSearch());
  };

  const otherPagesNavStyles = {
    backgroundColor: "rgba(245, 236, 227, 1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    color: "rgba(85, 85, 85, 1)",
  };

  const homePageNavStyles = {
    backgroundColor: "transparent",
    width: "100%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "10",
    color: "#ffffff",
  };
  const logoFillColor = isHomePage ? "#ffffff" : "rgba(85, 85, 85, 1)";

  return (
    <>
      {!isMobile ? (
        <nav
          className="nav nav-desc"
          style={isHomePage ? homePageNavStyles : otherPagesNavStyles}
        >
          <div className="nav__links">
            <NavLink to="/catalog" children={"Catalog"} />
            <NavLink to="/about" children={"About"} />
            <NavLink to="/delivery" children={"Delivery"} />
          </div>
          <div>
            <Logo logoFillColor={logoFillColor} />
          </div>
          <div className="nav__right relative">
            <NavLink to="/contacts" children={"Contacts"} />
            <div className="nav__icons">
              <span className="nav__icon">
                <GoSearch data-name="search" onClick={handleSearch} />
              </span>
              <NavLink className="nav__icon" to="/shop">
                <LiaShoppingBagSolid />
                <span>{calculateCartQty() || null}</span>
              </NavLink>
              <NavLink
                className="nav__icon"
                to="/login"
                children={<GoPerson />}
              />
            </div>
            {isSearchOpened && <Search />}
          </div>
        </nav>
      ) : (
        <nav
          className="nav nav-mobile"
          style={isHomePage ? homePageNavStyles : otherPagesNavStyles}
        >
          <button onClick={() => setOnOpenNav(!onOpenNav)}>
            {!onOpenNav ? <TbMenu /> : <VscChromeClose />}
          </button>

          {onOpenNav && (
            <span className="nav__icon">
              <GoSearch data-name="search" onClick={handleSearch} />
            </span>
          )}
          {onOpenNav && (
            <div className="nav__mobile__dropdown">
              {isSearchOpened && <Search />}
              <div className="nav-mobile__links">
                <NavLink to="/">Main Page</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/delivery">Delivery</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
              </div>
              <div className="nav__mobile__footer">
                <SocialLinks />
                <img src={signature} alt="signature" width={"160px"}/>
              </div>
            </div>
          )}
          <Logo logoFillColor={logoFillColor} />
          {onOpenNav && (
            <NavLink
              className="nav__icon"
              to="/login"
              children={<GoPerson />}
            />
          )}
          <NavLink className="nav__icon" to="/shop">
            <LiaShoppingBagSolid />
            <span>{calculateCartQty() || null}</span>
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default Nav;
