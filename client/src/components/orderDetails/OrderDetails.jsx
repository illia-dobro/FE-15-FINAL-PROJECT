import { useSelector } from "react-redux";
import ProductCard from '../productCard';
import { formatCurrency } from "../../helpers/currencyFormatter";

import styles from './OrderDetails.module.scss';

const Order = () => {
    const stateCart = useSelector((state) => state.cart);
    const products = stateCart.products;

    const quantity = products.length;

    let totalSum = 0;
    products.forEach((product) => (
        totalSum += product.price
    ))

    return (
        <div className={styles.order}>
            <div className={styles.order__header}>
                <h3 className={styles.order__header_title}>Order</h3>
                {quantity === 1 ? 
                    <span className={styles.order__header_number}>{quantity} product</span> :
                    <span className={styles.order__header_number}>{quantity} products</span>
                }
            </div>

            <div className={styles.order__product}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>          
                ))}
            </div>

            <div className={styles.order__total}>
                <p>Total:</p>
                <p className={styles.order__total_sum}>
                    {totalSum}
                    {formatCurrency(totalSum)}
                </p>
            </div>
        </div>
    )
};

export default Order;