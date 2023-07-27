import ContactsLinks from '../ContactsLinks/ContactsLinks';
import { heading, text } from '../Footer.module.scss';
import { wrapper } from './ContactsFooter.module.scss';

function ContactsFooter() {
  return (
    <div className={wrapper}>
      <h3 className={heading}>Contacts</h3>
      <p className={text}>
        We are open to new opportunities, so you can contact our company
        representatives for any questions
      </p>
      <ContactsLinks />
    </div>
  );
}

export default ContactsFooter;
