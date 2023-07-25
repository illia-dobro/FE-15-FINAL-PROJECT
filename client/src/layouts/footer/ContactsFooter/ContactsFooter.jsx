import { BiMailSend, BiLogoWhatsapp } from 'react-icons/bi';

function ContactsFooter() {
  return <div className='flex-1'>
  <h3 className="text-xl">Contacts</h3>
  <p>We are open to new opportunities, so you can contact our company representatives for any questions</p>
  <div className='flex gap-9'>
    <div className='flex gap-1 items-center'><BiMailSend /><span>E-mail</span></div>
    <div className='flex gap-1 items-center'><BiLogoWhatsapp/><span>Whatsapp</span></div>
  </div>
  </div> 
}

export default ContactsFooter;
