import styles from './GoogleMap.module.scss';

const GoogleMap = () => {
    return (
        <div className={styles.contacts__map}>
            <a href="" className={styles.Contacts__map_link}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1306031359395!2d30.52636808857028!3d50.43866793556949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf01aeda56cb%3A0x655c5c36d751a7d9!2z0J_QsNGA0YPRgQ!5e0!3m2!1suk!2sua!4v1690817037061!5m2!1suk!2sua" width="100%" height="100%" allowfullscreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>
        </div>
    )
}

export default GoogleMap;
