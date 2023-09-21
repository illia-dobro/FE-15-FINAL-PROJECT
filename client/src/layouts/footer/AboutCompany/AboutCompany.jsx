import SocialLinks from '../../../components/socialLinks/SocialLinks';
import ContactsLinks from '../ContactsLinks/ContactsLinks';
import signature from '../../../assets/images/signature.jpg';
import {
  aboutCompanyWrapper,
  imageWrapper,
  linksOnSmall,
} from './AboutCompany.module.scss';
import { heading, text } from '../Footer.module.scss';

function AboutCompany() {
  return (
    <div className={aboutCompanyWrapper}>
      <h3 className={heading}>Company</h3>
      <p className={text}>
        The brand strives to create respect for its products among the audience,
        so that the presence of the company`s products is a sign of prestige.
      </p>
      <div className={linksOnSmall}>
        <ContactsLinks />
      </div>
      <SocialLinks />
      <div className={imageWrapper}>
        <img src={signature} alt="signature" />
      </div>
    </div>
  );
}

export default AboutCompany;
