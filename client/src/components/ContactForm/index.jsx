import React from "react";
import FormikForm from '../FormikForm';
import { validationSchemaOrder } from '../../validation';
import { useState, useEffect } from 'react';

export function ContactForm({ contactForm, setActive, active, setContactValue }) {


	const [initialValues, setInitialValues] = useState({
		firstName: '',
		secondName: '',
		middleName: '',
		country: '',
		city: '',
		street: '',
		house: '',
		flat: '',
		email: '',
		telephone: '',
	});


	return (
		<>
			<FormikForm
				initialValues={initialValues}
				fields={contactForm}
				validationSchema={validationSchemaOrder}
				submitBtn="Continue"
			/>
		</>
	);
}
