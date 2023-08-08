import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './SocialMediaBtn.module.scss';

const SocialMediaBtn = ({ icons = [] }) => {
    return (
        icons.map((el, index) =>
            <NavLink key={index} to={el.to} target='_blank'>
                <button className={styles.socialMediaBtn}>
                    <img src={el.src} alt={el.alt} />
                </button>
            </NavLink>)
        )
    }

SocialMediaBtn.propTypes = {
    icon: PropTypes.array,
}

export default SocialMediaBtn;