import PropTypes from 'prop-types';

import SocialMediaBtn from '../SocialMediaBtn/SocialMediaBtn';

import styles from './SocialMedia.module.scss'

const SocialMedia = ({ text = '', socialMediaIcons = [] }) => {
    return (
        <div className={styles.socialMedia}>
            <p className={styles.socialMedia__text}>{text}</p>
            <div className={styles.socialMedia__buttons}>
                {socialMediaIcons.map((el, index) => (
                    <SocialMediaBtn key={index} icon={el} />
                ))}
            </div>
        </div>
    )
}

SocialMedia.propTypes = {
    text: PropTypes.string,
    socialMediaIcons: PropTypes.array,
}

export default SocialMedia;