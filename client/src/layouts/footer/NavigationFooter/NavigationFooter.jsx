import { Link } from 'react-router-dom';
import { wrapper } from './NavigationFooter.module.scss';
import { heading, list } from '../Footer.module.scss';

function NavigationFooter() {
  return (
    <div className={wrapper}>
      <h3 className={heading}>Navigation</h3>
      <nav className={list}>
        <Link to="/catalog">Product catalog</Link>
        <Link to="/about">About company</Link>
        <Link to="/delivery">Delivery</Link>
      </nav>
    </div>
  );
}

export default NavigationFooter;
