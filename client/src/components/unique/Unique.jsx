// import React from 'react';
import PropTypes from 'prop-types';

import signature from '../../assets/unique_signature.svg';
import uniqueBrand from '../../assets/unique_brandName.png';

import styles from './Unique.module.scss';

import useDeviceType from "../../helpers/getDeviceType";

const Unique = ({imageUrl = "", isRepresentative = false, flexDirection = "row", focus = "", content = ""}) => {
    const { isDesktop } = useDeviceType();
    const direction = isDesktop ? flexDirection : "column";
    
    return (
        <div className={styles.unique__container} style={{flexDirection: direction}}>
            <div className={styles.unique__description}>
                <img src={uniqueBrand} alt="Brand Name"></img>
                <h3 className={styles.unique__focus}>{focus}</h3>
                <p className={styles.unique__content}>{content}</p>
                
                {isRepresentative ?
                    <div className={styles.unique__signature}>
                        <div>
                            <p className={styles.unique__signature_name}>Zara Boltaeva</p>
                            <p className={styles.unique__signature_position}>CEO, founder</p>
                        </div>
                        <img className={styles.unique__signature_sign} src={signature} alt='CEO signature'></img>
                    </div> : null
                }
            </div>

            <img className={styles.unique__image} src={imageUrl} alt="Product Image" />
        </div>
    )
}

Unique.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    isRepresentative: PropTypes.bool,
    flexDirection: PropTypes.string,
    focus: PropTypes.string,
    content: PropTypes.string,
}

export default Unique;