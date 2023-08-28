import styles from './Delivery.module.scss';
import {useNavigate} from "react-router-dom";


function Delivery() {
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <button onClick={() => navigate(-1)}>&#8592; Back</button>
                <div className={styles.page_title}>Delivery information</div>
                <div className={styles.page_img}>
                    <img src="../../../src/assets/img/delivery/Rectangle38.png" alt="delivery"/>
                </div>
                <div className={styles.text_title}>Place an order on the website</div>


                <div className={styles.text}>
                    <ul className={styles.text_list}>
                        <li>Select the desired product and its quantity, click the &rdquo;Add to cart&ldquo;
                            button.</li>
                        <li>Go to the &rdquo;Shopping Cart&ldquo; section.</li>
                        <li>Enter the promo code you have and click the &rdquo;Place an
                            order&ldquo; button.</li>
                        <li>Specify your contact details (Recipient&apos;s full name, phone number, email address,
                            delivery city) or recipient&apos;s contact details.</li>
                        <li>Choose a delivery method (Courier, Pick-up point,
                            Pickup, Fast delivery from the store).</li>
                        <li>Select the delivery address.</li>
                        <li>Choose a
                            convenient payment method.</li>
                        <li>Click the &rdquo;Place an order&ldquo; button.</li>
                        <li>After placing an order, you will
                            receive a message to your email address containing information about the order: the order number,
                            the composition and cost of the order, and an SMS with the order number.</li>
                        <li>Information about your
                            orders (current and completed) You can always look in your account in the &rdquo;My purchases&ldquo; section.</li>
                        <li>The maximum cost of 1 order is 15000 dollars when paying on the website and 5000 dollars when
                            paying by card or cash upon receipt.</li>
                        <li>If the cost of your order exceeds the maximum, we recommend
                            placing several orders.</li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Delivery