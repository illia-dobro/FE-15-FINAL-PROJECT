import PropTypes from 'prop-types';

import styles from './FormField.module.scss';

const FormField = ({label = '', type = ''}) => {
    return (
        <form className={styles.formField}>
            <label className={styles.formField__label}>{label}</label>
            <input type={type} className={styles.formField__input}></input>
        </form>
    )
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default FormField;