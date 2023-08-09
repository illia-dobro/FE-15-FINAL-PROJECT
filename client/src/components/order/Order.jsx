import ActionBtn from '../buttons/actionBtn';
import ProductCard from '../productCard';

import { LuEuro, LuEdit2 } from "react-icons/lu";

import styles from './Order.module.scss';

const Order = () => {
    return (
        <div className={styles.order}>
            <div className={styles.order__header}>
                <h3 className={styles.order__header_title}>Order</h3>
                <span className={styles.order__header_number}>Number of products</span>
                <div>
                    <button>left</button>
                    <button>right</button>
                </div>
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

            <ActionBtn action="Send your order"/>

            <button className={styles.order__edit}>
                <LuEdit2 />
                <span>Edit this order</span>
            </button>
        </div>
    )
};

export default Order;