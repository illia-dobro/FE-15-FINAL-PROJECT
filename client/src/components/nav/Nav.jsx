import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Logo from "../logo/Logo";

import { GoPerson,GoSearch } from 'react-icons/go';
import { LiaShoppingBagSolid } from 'react-icons/Lia';
import "./nav.scss";

function Nav() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [onOpenNav, setOnOpenNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;

  useEffect(() => {
    const closeDrawer = (event) => {
      if (navRef.current && navRef.current.contains(event.target)) {
        return;
      }
      setOnOpenNav(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <>
      {!isMobile ? (
        <nav className="nav">
          <div>
            <Link className="nav__link" to="/catalog">Catalog</Link>
            <Link className="nav__link" to="/about">About</Link>
            <Link className="nav__link" to="/delivery">Delivery</Link>
          </div>
          <div>
            <Logo />
          </div>
          <div className="nav__right">
            <Link className="nav__link" to="/contacts">Contacts</Link>
            
            <div className="nav__icons">
              <span className="nav__icon" ><GoSearch /></span>
              <Link className="nav__icon" to="/shop"><LiaShoppingBagSolid/></Link>  
              <Link className="nav__icon" to="/login"><GoPerson/></Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="nav-mobile">
          <div onClick={() => setOnOpenNav(!onOpenNav)}>
            <button>Hi</button>
          </div>
          {onOpenNav && (
            <div className="nav-mobile__links" ref={navRef}>
              <Link to="/catalog">Catalog</Link>
              <Link to="/about">About</Link>
              <Link to="/delivery">Delivery</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
          )}
          <Logo />
          <Link to="/shop">Shop-icon</Link>
        </nav>
      )}
    </>
  );
}

export default Nav;
