import PropTypes from 'prop-types';

import styles from './CosmeticCategory.module.scss';
import { NavLink } from 'react-router-dom';

const CosmeticCategory = ({ image = {}, category = '', to = ''}) => {
    return (
        <NavLink to={to} className={styles.category}>
            <img src={image.src} alt={image.alt} className={styles.category__image} />
            <p className={styles.category__name}>{category}</p>
        </NavLink>
    )
}

CosmeticCategory.propTypes = {
    image: PropTypes.object,
    category: PropTypes.string,
    to: PropTypes.string
}

export default CosmeticCategory;
