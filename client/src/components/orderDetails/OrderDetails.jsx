import { useLocation } from 'react-router-dom';

import styles from './OrderDetails.module.scss';

const Order = () => {
  const location = useLocation();

  return (
    <div className={styles.order}>
      <div className={styles.order__header}>
        <h3 className={styles.order__header_title}>Order</h3>
        {location.state.number === 1 ? 
          <span className={styles.order__header_number}>{location.state.number} product</span> :
            <span className={styles.order__header_number}>{location.state.number} products</span>
        }
      </div>

      <div className={styles.order__product}>

      </div>

      <div className={styles.order__total}>
        <p>Total:</p>
        <p className={styles.order__total_sum}>
          {location.state.total}
        </p>
      </div>
    </div>
  );
};

export default Order;