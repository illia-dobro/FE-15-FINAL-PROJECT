import PropTypes from 'prop-types';

import { IoIosArrowRoundForward } from "react-icons/io";

import styles from './ActionBtn.module.scss';

const ActionBtn = ( {action = ''}) => {
    return (
        <button className={styles.actionBtn}>
            <span className={styles.actionBtn__name}>{action}</span>
            <IoIosArrowRoundForward />
        </button>
)
}

ActionBtn.propTypes = {
    action: PropTypes.string.isRequired,
    to: PropTypes.string,
}

export default ActionBtn;