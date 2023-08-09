import { BiMailSend, BiLogoWhatsapp } from 'react-icons/bi';
import { linksWrapper, link } from './ContactsLinks.module.scss';

function ContactsLinks() {
  return (
    <div className={linksWrapper}>
      <a className={link} href="mailto: abc@example.com">
        <BiMailSend size={20} className='hover:fill-gray-950'/>
        <span>E-mail</span>
      </a>
      <a className={link} href="https://wa.me/15551234567">
        <BiLogoWhatsapp size={20} className='hover:fill-gray-950 transition-colors'/>
        <span>Whatsapp</span>
      </a>
    </div>
  );
}

export default ContactsLinks;
