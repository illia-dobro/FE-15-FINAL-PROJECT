import PropTypes from 'prop-types';

import SocialMediaBtn from '../socialMediaBtn/SocialMediaBtn';

import styles from './SocialMedia.module.scss'

const SocialMedia = ({ text = '', socialMediaIcons = [] }) => {
    return (
        <div className={styles.socialMedia}>
            <p className={styles.socialMedia__text}>{text}</p>
            <nav className={styles.socialMedia__buttons}>
                {socialMediaIcons.map((el, index) => (
                    <SocialMediaBtn key={index} icon={el} />
                ))}
            </nav>
        </div>
    )
}

SocialMedia.propTypes = {
    text: PropTypes.string,
    socialMediaIcons: PropTypes.array,
}

export default SocialMedia;