import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationFooter from './NavigationFooter';
import ProductsFooter from './ProductsFooter';
import ContactsFooter from './ContactsFooter';
import AboutCompany from './AboutCompany/AboutCompany';
import { footer, footerFourColumn, footerLogo } from './Footer.module.scss';

function Footer() {
  return (
    <footer className={footer}>
      <ToastContainer />
      <div className={footerLogo}>
        <Logo fill={'#AC8F78'} />
      </div>
      <div className={footerFourColumn}>
        <AboutCompany />
        <NavigationFooter />
        <ProductsFooter />
        <ContactsFooter />
      </div>
    </footer>
  );
}

export default Footer;
