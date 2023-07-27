import { Link } from "react-router-dom";
import Logo from "../logo";
import { useEffect, useState } from "react";
import { GoPerson, GoSearch } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbMenu } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import ProductSlider from "../productSlider";
import useDeviceType from "../../helpers/getDeviceType";
import "./nav.scss";

function Nav() {
  const { isMobile} = useDeviceType();
  const [onOpenNav, setOnOpenNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const NavLink = ({ to, children, className = "nav__link" }) => (
    <Link className={className} to={to} onClick={() => setOnOpenNav(false)}>
      {children}
    </Link>
  );

  const otherPagesNavStyles = {
    backgroundColor: "rgba(245, 236, 227, 1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    color: "rgba(85, 85, 85, 1)"
  };
  const homePageNavStyles = {
    backgroundColor: "transparent",
  };

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
            <Logo />
          </div>
          <div className="nav__right">
            <NavLink to="/contacts" children={"Contacts"} />
            <div className="nav__icons">
              <span className="nav__icon">
                <GoSearch />
              </span>
              <NavLink
                className="nav__icon"
                to="/shop"
                children={<LiaShoppingBagSolid />}
              />
              <NavLink
                className="nav__icon"
                to="/login"
                children={<GoPerson />}
              />
            </div>
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
              <GoSearch />
            </span>
          )}
          {onOpenNav && (
            <div className="nav__mobile__dropdown">
              <div className="nav-mobile__links">
                <NavLink to="/">Main Page</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/delivery">Delivery</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
              </div>
            
              {/* Social Btns and signature slider*/}
            </div>
          )}
          <Logo />
          {onOpenNav && (
            <NavLink
              className="nav__icon"
              to="/login"
              children={<GoPerson />}
            />
          )}
          <NavLink
            className="nav__icon"
            to="/shop"
            children={<LiaShoppingBagSolid />}
          />
        </nav>
      )}
    </>
  );
}

export default Nav;
