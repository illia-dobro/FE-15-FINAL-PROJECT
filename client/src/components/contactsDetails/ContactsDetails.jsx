import styles from './ContactsDetails.module.scss';

const ContactsDetails = () => {
    return (
        <div className={styles.contacts__details}>
            <div className={styles.contacts__details_content}>
                <p className={styles.contacts__details_name}>Call us</p>
                <a href="tel:+19016504550" className={styles.contacts__details_info}>+1 (901) 650 - 45 - 50</a>
            </div>
            <div className={styles.contacts__details_content}>
                <p className={styles.contacts__details_name}>Support</p>
                <a href="mailto:helpme@boltaeva.pro" className={styles.contacts__details_info}>helpme@boltaeva.pro</a>
            </div>
            <div className={styles.contacts__details_content}>
                <p className={styles.contacts__details_name}>Adress</p>
                <a href="https://goo.gl/maps/VUWbNcdRH6CdDWny9" target="blank" className={styles.contacts__details_info}>UAE, Dubai, 54, 560 of.</a>
            </div>
            <div className={styles.contacts__details_content}>
                <p className={styles.contacts__details_name}>Partners department</p>
                <a href="mailto:parthers@boltaeva.pro" className={styles.contacts__details_info}>parthers@boltaeva.pro</a>
            </div>
        </div>
    )
}

export default ContactsDetails;