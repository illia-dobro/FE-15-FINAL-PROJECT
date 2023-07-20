import { Link } from "react-router-dom";
import Logo from "../logo";
import { useEffect, useState} from "react";
import { GoPerson, GoSearch } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/Lia";
import { TbMenu } from "react-icons/Tb";
import { VscChromeClose } from "react-icons/Vsc";
import "./nav.scss";

function Nav() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [onOpenNav, setOnOpenNav] = useState(false);
  const isMobile = windowDimension <= 768;

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
  
  const NavLink = ({ to, children, className="nav__link"}) => (
    <Link className={className} to={to} onClick={()=>setOnOpenNav(false)}>
      {children}
    </Link>
  );
  return (
    <>
      {!isMobile ? (
        <nav className="nav nav-desc">
          <div className="nav__links">
            <NavLink to="/catalog" children={"Catalog"}/>
            <NavLink to="/about" children={"About"}/>
            <NavLink to="/delivery" children={"Delivery"}/>
          </div>
          <div>
            <Logo />
          </div>
          <div className="nav__right">
            <NavLink to="/contacts" children={"Contacts"}/>
            <div className="nav__icons">
              <span className="nav__icon">
                <GoSearch />
              </span>
              <NavLink className="nav__icon" to="/shop" children={<LiaShoppingBagSolid />}/>
              <NavLink className="nav__icon" to="/login" children={ <GoPerson />}/>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="nav nav-mobile">
            <button onClick={() => setOnOpenNav(!onOpenNav)}>
              {!onOpenNav?<TbMenu />:<VscChromeClose/>}
            </button>

          {onOpenNav && (
            <span className="nav__icon">
              <GoSearch />
            </span>
          )}
          {onOpenNav && (
            <div className="nav__mobile__dropdown">
              <div className="nav-mobile__links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/delivery">Delivery</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
              </div>
            </div>
          )}
          <Logo />
          {onOpenNav && (
            <NavLink className="nav__icon" to="/login" children={<GoPerson />}/>
          )}
          <NavLink className="nav__icon" to="/shop" children={<LiaShoppingBagSolid />}/>
          {/* Here will be extra components */}
        </nav>
      )}
    </>
  );
}

export default Nav;
