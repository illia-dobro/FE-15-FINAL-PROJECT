import { useDispatch } from "react-redux";
import { addToCart } from "../../app/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';
import useDeviceType from '../../helpers/getDeviceType';
import ProductDetailSlider from '../../components/productDetailSlider';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import Recommended from '../../components/recommended';
import QuantityBtns from '../../components/buttons/quantityBtns/QuantityBtns';
import FavoriteBtn from '../../components/buttons/favoriteBtn';
import { formatCurrency } from '../../helpers/currencyFormatter';
import uniqueMainImgUrl from '../../assets/unique_main.png';
import uniqueMainImgUrl2 from '../../assets/unique_main2.jpg';
import DeliveryInfo from '../../components/static/DeliveryInfo';
import Unique from '../../components/unique';
import Button from '../../components/buttons/button';
import Tabs from '../../components/tabs';
import { useGetFilteredProductsQuery } from '../../app/services/productApi';
import { useSelector } from 'react-redux';
import { isTokenUser } from '../../app/slices/authSlice';

function ProductDetailLayout({ product }) {
	const navigate = useNavigate();
	const [quantity, setQuantity] = useState(1);
	const { isDesktop } = useDeviceType();
	const isUserAuth = Boolean(useSelector(isTokenUser));
	const dispatch = useDispatch();

	const { data: filtredProducts, isSuccess, isLoading, isError } = useGetFilteredProductsQuery(
		`categories=${product.categories}&product_type=${product.product_type}&enabled=true&perPage=8`
	);

	// Виправлено: Додано обробку помилок та відображення індикатора завантаження
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError || !isSuccess || !filtredProducts) {
		return <p>Error loading data.</p>;
	}

	const recommendedProducts = filtredProducts.products.filter(
		(recommendedProduct) => product._id !== recommendedProduct._id
	);

	const thumbnailPosition = isDesktop ? 'left' : 'bottom';
	const productDetailSliderSettings = {
		showThumbnails: true,
		showPlayButton: true,
		showFullscreenButton: true,
		showNav: false,
		slideInterval: 3000,
		slideDuration: 500,
		infinite: true,
		showGalleryThumbnails: true,
		thumbnailPosition: thumbnailPosition,
	};

	const spesificationTabsContent = (
		<ul>
			<li>
				Brand:<strong> {product.brand}</strong>
			</li>
			<li>
				Country:<strong> {product.manufacturerCountry}</strong>
			</li>
			<li>
				<strong>{product.sizes}</strong>
			</li>
			<li>{product.composition}</li>
		</ul>
	);
	const productTabs = [
		{ label: 'Product', content: product.description },
		{ label: 'Specifications', content: spesificationTabsContent },
		{ label: 'Delivery', content: <DeliveryInfo /> },
	];
	const productPictures = product.imageUrls.map((image) => ({
		original: image,
		thumbnail: image,
	}));

	const handleAddToCart = async () => {
		console.log("Add to cart clicked");
		console.log("Product Data:", product); // Вивести дані продукту в консоль
		try {
			const productWithQuantity = {
				...product,
				cartQuantity: quantity,
			};
			console.log("Product with Quantity:", productWithQuantity); // Вивести об'єкт продукту з кількістю в консоль
			dispatch(addToCart(productWithQuantity));
			// Після успішного додавання товару до кошика, перейдіть на іншу сторінку
			navigate("/shop"); // Замініть "/shop" на URL вашої сторінки
		} catch (error) {
			console.error("Error adding product to cart:", error);
		}
	};


	const handleIncrement = () => {
		// Збільшуємо кількість на 1
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		// Зменшуємо кількість на 1, але не менше 1
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className="product-detail__card">
			<div className="product-detail__flex">
				<div className="product-detail__left">
					<ProductDetailSlider
						imageUrl={productPictures}
						sliderSettings={productDetailSliderSettings}
					/>
				</div>
				<div className="product-detail__right">
					<div className="product-detail__right-content">
						{isUserAuth && <FavoriteBtn id={product._id} />}
						<h2>{product.name}</h2>
						<div className="product-detail__quantity-price">
							<QuantityBtns
								handleIncrement={handleIncrement}
								handleDecrement={handleDecrement}
								count={quantity}
								className="quantityBtnsLg"
							/>
							<span className="price">
								{formatCurrency(product.currentPrice * quantity)}
							</span>
						</div>
						<Button
							className="button button-color--secondary"
							action={handleAddToCart}
						>
							<LiaShoppingBagSolid />
							<span>Add to shopping cart</span>
						</Button>
						<div className="product-detail__tabs">
							<Tabs
								tabs={productTabs}
								classNameList="product-detail__tabs-btns"
								classNamePanel="product-detail__tabs-content"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="unique">
				<Unique
					imageUrl={uniqueMainImgUrl}
					isRepresentative={false}
					flexDirection="row"
					focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
					content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
				/>
				<Unique
					imageUrl={uniqueMainImgUrl2}
					isRepresentative={true}
					flexDirection="row-reverse"
					focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
					content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
				/>
			</div>
			{isSuccess && <Recommended products={recommendedProducts} />}
		</div>
	);
}

export default ProductDetailLayout;


ProductDetailLayout.propTypes = {
	product: PropTypes.object
};
