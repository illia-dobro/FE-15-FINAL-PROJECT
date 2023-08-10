import React from "react";
import { ContactForm } from '../../components/ContactForm';
import { contactForm } from '../../components/ContactForm/contactForm.js';

export function Order() {
	return (
		<>
			<span>Order page!</span>;
			<ContactForm
				className={styling.user_info__contact_form}
				contactForm={contactForm}
				setActive={setActive}
				setContactValue={setContactValue}
				active={active}
			/>
		</>
	);
}
