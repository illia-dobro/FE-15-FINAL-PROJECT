// import React from 'react';
import PropTypes from 'prop-types';

import signature from '../../assets/unique_signature.svg';
import uniqueBrand from '../../assets/unique_brandName.png';

import styles from './Unique.module.scss';

const Unique = ({image = {}, isRepresentative = false}) => {
    return (
        <>
            <div className={styles.unique__description}>
                <img src={uniqueBrand} alt="Brand Name"></img>
                <h3 className={styles.unique__focus}>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</h3>
                <p className={styles.unique__content}>The brand seeks to build respect among the audience for its products, so that the presence of the company&apos;s products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
                
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
            <img className={styles.unique__image} src={image.src} alt={image.alt} />
        </>
    )
}

Unique.propTypes = {
    image: PropTypes.object,
    isRepresentative: PropTypes.bool,
}

export default Unique;