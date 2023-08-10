import React from "react";
import styling from './order.module.scss';
import { ContactForm } from '../../components/ContactForm';
import { contactForm } from '../../components/ContactForm/contactForm.js';
import { useState, useContext } from 'react';

export function Basket() {
	const [active, setActive] = useState(false);
	const [contactValue, setContactValue] = useState();
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
