import { LuEuro } from "react-icons/lu";
import ProductCard from '../productCard';

import styles from './OrderDetails.module.scss';

const Order = () => {
    const quantity = 0;

    return (
        <div className={styles.order}>
            <div className={styles.order__header}>
                <h3 className={styles.order__header_title}>Order</h3>
                <span className={styles.order__header_number}>{quantity} products</span>
            </div>

            <div className={styles.order__product}>
                <ProductCard product={{}}/>          
            </div>

            <div className={styles.order__total}>
                <p>Total:</p>
                <p className={styles.order__total_sum}>
                    ###
                    <LuEuro />
                </p>
            </div>
        </div>
    )
};

export default Order;
