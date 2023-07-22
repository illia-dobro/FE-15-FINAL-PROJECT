import PropTypes from 'prop-types';
import styles from './SocialMediaBtn.module.scss';

const SocialMediaBtn = ({ icon = {} }) => {
    return (
        <>
            <button className={styles.socialMediaBtn}>
                <img src={icon.src} alt={icon.alt} />
            </button>
        </>
    )
}

SocialMediaBtn.propTypes = {
    icon: PropTypes.object,
}

export default SocialMediaBtn;