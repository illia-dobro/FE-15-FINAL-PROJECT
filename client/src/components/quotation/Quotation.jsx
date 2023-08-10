import styles from "./Quotation.module.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Quotation({ quote, authorName, authorCaption, imageSrc, signatureSrc }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__description}>
        {quote}
      </div>

      <div className={styles.card__footer}>
        <div className={`${styles.card__person} ${styles.person}`}>
          <img className={styles.person__avatar} src={imageSrc} alt="avatar"/>
          <div className={styles.person__naming}>
            <div className={styles.person__name}>{authorName}</div>
            <div className={styles.person__title}>{authorCaption}</div>
          </div>
        </div>

        <div className={styles.card__signature}>
          <img src={signatureSrc} alt=""/>
        </div>
      </div>
    </div>
  );
}

Quotation.propTypes = {
  quote: PropTypes.string,
  authorName: PropTypes.string,
  authorCaption: PropTypes.string,
  imageSrc: PropTypes.string,
  signatureSrc: PropTypes.string
}

export default Quotation;
