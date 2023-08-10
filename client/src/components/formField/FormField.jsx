import PropTypes from 'prop-types';

import styles from './FormField.module.scss';

const FormField = ({label = '', id = '', type = ''}) => {
    return (
        <div className={styles.formField}>
            <label className={styles.formField__label}>{label}</label>
            <input id={id} type={type} className={styles.formField__input} onChange={(e) => console.log(`${id}: ${e.target.value}`)}></input>
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default FormField;