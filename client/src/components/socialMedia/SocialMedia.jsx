import PropTypes from 'prop-types';

import styles from './SocialMedia.module.scss';

const SocialMedia = ({ text = ''}) => {
    return (
        <p className={styles.socialMedia__text}>{text}</p>
    )
}

SocialMedia.propTypes = {
    text: PropTypes.string,
}

export default SocialMedia;
