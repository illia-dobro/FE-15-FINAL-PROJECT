import React from 'react';
import { useField } from 'formik';

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	// Визначаємо клас для div в залежності від умови
	let itemClass = props.itemClass;
	if (props.index <= 2) {
		itemClass += ` ${itemClass}--33`;
	} else if (props.index <= 5) {
		itemClass += ` ${itemClass}--50`;
	} else if (props.index <= 7) {
		itemClass += ` ${itemClass}--25`;
	}

	return (
		<div className={itemClass}>
			<label
				htmlFor={props.id}
				className={props.labelClass}>
				{label}
			</label>
			<input
				className={props.inputClass}
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				{...field}
				value={field.value || ''}
				readOnly={props.name === '_id'} />
			{meta.touched && meta.error
				? <div
					className={props.errorClass}>
					{meta.error}
				</div>
				: null}
		</div>
	);
};

export default Input;