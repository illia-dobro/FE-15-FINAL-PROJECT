import PropTypes from 'prop-types';
import { IoIosArrowRoundDown } from "react-icons/io";

import styles from './ChooseBtn.module.scss'; 

const ChooseBtn = ({ text = '' }) => {
    return (
        <button className={styles.chooseBtn}>
            <span className={styles.chooseBtn__option}>{text}</span>
            <IoIosArrowRoundDown />
        </button>
    )
}

ChooseBtn.propTypes = {
    text: PropTypes.string,
}

export default ChooseBtn;