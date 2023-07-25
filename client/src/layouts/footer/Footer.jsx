import SocialLinks from "./SocialLinks";
import signature from "../../assets/images/signature.jpg";
import NavigationFooter from "./NavigationFooter";
import ProductsFooter from "./ProductsFooter";
import ContactsFooter from "./ContactsFooter";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-44 px-28">
      <div className="flex justify-center pb-16">
        <Logo />
      </div>
      <div className="flex justify-around gap-10">
        <div className="flex flex-col flex-1">
          <h3 className="text-xl">Company</h3>
          <p>
            The brand strives to create respect for its products among the
            audience, so that the presence of the company`s products is a sign
            of prestige.
          </p>
          <SocialLinks />
          <div>
            <img src={signature} alt="signature" />
          </div>
        </div>

        <NavigationFooter />
        <ProductsFooter />
        <ContactsFooter />
      </div>
    </footer>
  );
}

export default Footer;
