import * as Yup from 'yup';

export const validationSchemaOrder = Yup.object({
    name: Yup.string()
        .min(2, 'Must contain at least 2 letters')
        .max(25, 'Can be no more than 25 characters')
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Must be a-z A-Z а-я А-Я')
        .trim()
        .required('Required Field!'),
    email: Yup.string().email('Invalid email').required('Required'),
    telephone: Yup.string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
        .required('Required Field!'),
});
