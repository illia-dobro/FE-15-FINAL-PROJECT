import PropTypes from 'prop-types';

import styles from './SocialMedia.module.scss'

// import SocialMediaBtn from '../socialMediaBtn/SocialMediaBtn';

// const SocialMedia = ({ text = '', socialMediaIcons = [] }) => {
//     return (
//         <div className={styles.socialMedia}>
//             <p className={styles.socialMedia__text}>{text}</p>
//             <nav className={styles.socialMedia__buttons}>
//                 {socialMediaIcons.map((el, index) => (
//                     <SocialMediaBtn key={index} icon={el} />
//                 ))}
//             </nav>
//         </div>
//     )
// }

// SocialMedia.propTypes = {
//     text: PropTypes.string,
//     socialMediaIcons: PropTypes.array,
// }

const SocialMedia = ({ text = ''}) => {
    return (
        <p className={styles.socialMedia__text}>{text}</p>
    )
}

SocialMedia.propTypes = {
    text: PropTypes.string,
}

export default SocialMedia;
