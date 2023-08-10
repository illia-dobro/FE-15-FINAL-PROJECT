// import React from 'react';
// import style from './form.module.scss';
// import { Formik, Form } from 'formik';
// import Input from '../Input';
// import InputMasked from '../InputMasked';

// export default function FormikForm({ initialValues, validationSchema, fields, callback, submitBtn, fieldContainerClass }) {

// 	return (
// 		<Formik
// 			initialValues={initialValues}
// 			validationSchema={validationSchema}
// 			onSubmit={async (values, { setSubmitting }) => {
// 				callback(values);
// 				setSubmitting(false);
// 			}} >
// 			<Form className={style.form}>
// 				{fields?.map(field => {
// 					if (field.tagType === 'masked') {
// 						return <InputMasked
// 							key={field.name}
// 							fieldClass={fieldContainerClass}
// 							{...field}
// 							itemClass={style.form__item}
// 							labelClass={style.form__label}
// 							inputClass={style.form__input}
// 							errorClass={style.form__error} />
// 					}
// 					return <Input
// 						key={field.name}
// 						fieldClass={fieldContainerClass}
// 						{...field}
// 						itemClass={style.form__item}
// 						labelClass={style.form__label}
// 						inputClass={style.form__input}
// 						errorClass={style.form__error} />
// 				})}
// 				<button className="form__submit" type='submit'>{submitBtn}</button>
// 			</Form>
// 		</Formik>
// 	)
// }

import React from 'react';
import style from './form.module.scss';
import { Formik, Form } from 'formik';
import Input from '../Input';
import InputMasked from '../InputMasked';
import classNames from 'classnames';

export default function FormikForm({ initialValues, validationSchema, fields, callback, submitBtn, fieldContainerClass }) {

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values, { setSubmitting }) => {
				callback(values);
				setSubmitting(false);
			}} >
			<Form className={style.form}>
				{fields?.map((field, index) => {
					const itemClass = classNames(style.form__item, {
						[style['form__item--33']]: index < 3,
						[style['form__item--50']]: index >= 3 && index < 6,
						[style['form__item--25']]: index >= 6 && index < 8,
					});

					if (field.tagType === 'masked') {
						return <InputMasked
							key={field.name}
							fieldClass={fieldContainerClass}
							{...field}
							itemClass={itemClass}
							labelClass={style.form__label}
							inputClass={style.form__input}
							errorClass={style.form__error} />
					}
					return <Input
						key={field.name}
						fieldClass={fieldContainerClass}
						{...field}
						itemClass={itemClass}
						labelClass={style.form__label}
						inputClass={style.form__input}
						errorClass={style.form__error} />
				})}
			</Form>
		</Formik>
	)
}
