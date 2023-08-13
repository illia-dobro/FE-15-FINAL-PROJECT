import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	const containerClass = classNames(
		props.fieldClass,
		props.itemClass,
		{
			[`${props.itemClass}--33`]: props.index <= 2,
			[`${props.itemClass}--50`]: props.index > 2 && props.index <= 5,
			[`${props.itemClass}--25`]: props.index > 5 && props.index <= 7,
		}
	);

	const inputClass = classNames(props.inputClass, {
		'_active': field.value !== ''
	});

	return (
		<div className={containerClass}>
			<label htmlFor={props.id} className={props.labelClass}>
				{label}
			</label>
			<input
				className={inputClass}
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
				{...field}
				value={field.value || ''}
				readOnly={props.name === '_id'}
			/>
			{meta.touched && meta.error ? (
				<div className={props.errorClass}>{meta.error}</div>
			) : null}
		</div>
	);
};

export default Input;
