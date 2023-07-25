import { Link } from "react-router-dom";


function NavigationFooter() {
  return (
    <div className="flex-1">
      <h3 className="text-xl">Navigation</h3>
      <nav className="flex flex-col">
        <Link to="/catalog">Product catalog</Link>
        <Link to="/about" >About company</Link>
        <Link to="#">Bonus program</Link>

        <Link to="#">Work process</Link>

        <Link to="#">Partners</Link>
        <Link to="#">Privacy Policy</Link>
      </nav>
    </div>
  );
}

export default NavigationFooter;
