import LogoLink from "../../img/temporaryLogo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
        <img src={LogoLink} alt="logo" width={"52px"}/>
    </Link>
        
  )
}

export default Logo