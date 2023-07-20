import React from 'react';
import styles from './Unique.module.css';
import uniqueBrand from '../../assets/unique_brandName.png';

const Unique = ({image={}, name='', position='', signature={}}) => {
    return (
        <div class={styles.unique}>
            <img src={image.src} alt={image.alt} />
            <div class={styles.unique__description}>
                <img src={uniqueBrand} alt="brand Name"></img>
                <h3 class={styles.unique__focus}>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</h3>
                <p class={styles.unique__content}>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
                <div class={styles.unique__signature}>
                    <div class={styles.unique__signature_person}>
                        <p class={styles.unique__signature_name}>{name}</p>
                        <p class={styles.unique__signature_position}>{position}</p>
                    </div>
                    <img class={styles.unique__signature_sign} src={signature.src} alt={signature.alt}></img>
                </div>
            </div>
        </div>
    )
}

export default Unique;