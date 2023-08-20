
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../app/slices/cartSlice';
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "./shop.module.scss";

function Shop() {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.cartItems);

	const handleRemoveItem = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	const totalAmount = items.reduce(
		(total, item) => total + item.cartQuantity * item.currentPrice,
		0
	);

	return (
		<div className={styles.shop}>
			<div className={styles.shop__container}>
				<h2 className={styles.shop__title}>Your cart</h2>
				<ul className={styles.shop__list}>
					{items.map((item) => (
						<li key={item._id} className={styles.shop__item}>
							<a className={styles.shop__item_img}>
								<img src={item.imageUrls[0]} alt="Image" />
							</a>
							<div className={styles.shop__item_info}>
								<div className={styles.shop__item_main}>
									<a href="#">
										<h3 className={styles.shop__item_title}>{item.name}</h3>
									</a>
									<FavoriteBtn />
									<QuantityBtns
										handleIncrement={() => { }}
										handleDecrement={() => { }}
										count={item.cartQuantity}
										className={styles.shop__item_quantityBtn}
									/>
								</div>
								<div className={styles.shop__item_adidional}>
									<button
										className={styles.shop__item_close}
										onClick={() => handleRemoveItem(item._id)}
									>
										x
									</button>
									<div className={styles.shop__item_price}>
										<small className={styles.shop__item_count}>
											{item.cartQuantity}x
										</small>
										<span className={styles.shop__item_sum}>
											{formatCurrency(item.cartQuantity * item.currentPrice)}
										</span>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				{items.length > 0 && (
					<div className={styles.shop__total}>
						<p className={styles.shop__total_text}>Total</p>
						<p className={styles.shop__total_sum}>
							{formatCurrency(totalAmount)}
						</p>
					</div>
				)}
				{items.length > 0 && (
					<Button className={styles.shop__order}>
						<span className={styles.shop__order_text}>Place an order</span>
						<AiOutlineArrowRight className={styles.shop__order_arrow} />
					</Button>
				)}
				<div className="product-recommended__slider">
					{/* Додайте вміст вашого слайдера тут */}
				</div>
			</div>
		</div>
	);
}

export default Shop;
