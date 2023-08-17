import { useState } from 'react';
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import Button from "../../components/buttons/button";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "./shop.module.scss";

function Shop() {
	const itemPrice = 30; // Вартість одного товару

	const [items, setItems] = useState([]); // Масив товарів

	const handleAddItem = () => {
		const newItem = {
			id: Date.now(), // Унікальний ідентифікатор для кожного товару
			quantity: 1, // Початкова кількість товару
		};

		setItems([...items, newItem]);
	};

	const handleIncrement = (itemId) => {
		setItems(prevItems =>
			prevItems.map(item => {
				if (item.id === itemId) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			})
		);
	};

	const handleDecrement = (itemId) => {
		setItems(prevItems =>
			prevItems.map(item => {
				if (item.id === itemId && item.quantity > 0) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			})
		);
	};

	const totalAmount = items.reduce((total, item) => total + item.quantity * itemPrice, 0);

	return (
		<>
			<button onClick={handleAddItem}>Add Item</button>
			<div className={styles.shop}>
				<div className={styles.shop__container}>
					<h2 className={styles.shop__title}>Your cart</h2>
					<ul className={styles.shop__list}>
						{items.map(item => (
							<li key={item.id} className={styles.shop__item}>
								<a className={styles.shop__item_img}>
									<img src="#" alt="Image"></img>
								</a>
								<div className={styles.shop__item_info}>
									<div className={styles.shop__item_main}>
										<a href='#'>
											<h3 className={styles.shop__item_title}>EYEBROW PENCIL JONDOR</h3>
										</a>
										<FavoriteBtn></FavoriteBtn>
										<QuantityBtns
											handleIncrement={() => handleIncrement(item.id)}
											handleDecrement={() => handleDecrement(item.id)}
											count={item.quantity}
											className={styles.shop__item_quantityBtn}
										/>
									</div>
									<div className={styles.shop__item_price}>
										<small className={styles.shop__item_count}>{item.quantity}x</small>
										<span className={styles.shop__item_sum}>
											{formatCurrency(item.quantity * itemPrice)}
										</span>
									</div>
								</div>
							</li>
						))}
					</ul>
					{items.length > 0 && (
						<div className={styles.shop__total}>
							<p className={styles.shop__total_text}>Total</p>
							<p className={styles.shop__total_sum}>{formatCurrency(totalAmount)}</p>
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
		</>
	);
}

export default Shop;
