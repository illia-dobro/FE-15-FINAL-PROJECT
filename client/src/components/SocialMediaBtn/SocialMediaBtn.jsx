import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './SocialMediaBtn.module.scss';

const SocialMediaBtn = ({ icon = {} }) => {
    return (
        <NavLink to={icon.to} target='_blank'>
            <button className={styles.socialMediaBtn}>
                <img src={icon.src} alt={icon.alt} />
            </button>
        </NavLink>
    )
}

SocialMediaBtn.propTypes = {
    icon: PropTypes.object,
}

export default SocialMediaBtn;