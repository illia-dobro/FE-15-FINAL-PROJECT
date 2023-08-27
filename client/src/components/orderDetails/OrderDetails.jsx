import styles from './OrderDetails.module.scss';
import { useLocation } from 'react-router-dom';

const Order = () => {

  const location = useLocation();

  return (
    <div className={styles.order}>
      <div className={styles.order__header}>
        <h3 className={styles.order__header_title}>Order</h3>
        <span className={styles.order__header_number}>{location.state.number} products</span>
      </div>

      <div className={styles.order__product}>

      </div>

      <div className={styles.order__total}>
        <p>Total:{location.state.total}</p>
        <p className={styles.order__total_sum}>

        </p>
      </div>
    </div>
  );
};

export default Order;
