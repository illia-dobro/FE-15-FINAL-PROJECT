import PropTypes from 'prop-types';

import styles from './SocialMediaImages.module.scss';

const SocialMediaImages = ({ socialMediaImages = [] }) => {
    return (
    <div className={styles.socialMediaImgs}>
        {socialMediaImages.map((el, index) => 
            <img key={index} src={el.src} alt={el.alt} />
        )}
    </div>

    )
}

SocialMediaImages.propTypes = {
    socialMediaImages: PropTypes.array,
}

export default SocialMediaImages;
