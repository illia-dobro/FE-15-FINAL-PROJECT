
// Імпортуємо необхідні компоненти та бібліотеки
import HeartsLoader from "../../components/heartsLoader/heartsLoader.jsx";
import { useState, useEffect } from 'react';
import ProductCard from "../../components/productCard";
import HomePageSlider from "../../components/homePageSlider";
import CosmeticCategory from "../../components/cosmeticCategory";
import Unique from "../../components/unique";
import SocialMedia from "../../components/socialMedia";
import SocialMediaBtn from "../../components/buttons/socialMediaBtn";
import SocialMediaImages from "../../components/socialMediaImages";
import { useGetCategoriesQuery } from "../../app/services/catalogApi";
import { useGetAllProductsQuery } from "../../app/services/productApi";
import CosmeticCategory from "../../components/cosmeticCategory";
import uniqueMainImgUrl from "../../assets/unique_main.png";
import InstagramUrl from "../../components/buttons/socialMediaBtn/Instagram.png";
import SocialImgUrl1 from "../../components/socialMediaImages/socialImg1.png";
import SocialImgUrl2 from "../../components/socialMediaImages/socialImg2.png";
import SocialImgUrl3 from "../../components/socialMediaImages/socialImg3.png";
import SocialImgUrl4 from "../../components/socialMediaImages/socialImg4.png";

import styles from "./Home.module.scss";

function Home() {
	// Запити до API для отримання категорій та товарів
	const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();
	const { data: products, isLoading: isLoadingProducts } = useGetAllProductsQuery();

	// Створюємо стан для відстеження завантаження
	const [isLoading, setIsLoading] = useState(true);

	// Використовуємо useEffect для відстеження завантаження категорій та товарів
	useEffect(() => {
		if (!isLoadingCategories && !isLoadingProducts) {
			// Якщо обидва запити завершилися, встановлюємо isLoading в false
			setIsLoading(false);
		}
	}, [isLoadingCategories, isLoadingProducts]);

	// Застосовуємо лоадер, якщо isLoading === true
	if (isLoading) {
		return (
			<div className={styles.loaderContainer}>
				<HeartsLoader wrapperClass="hearts" />
			</div>
		);
	}

	// Логуємо дані категорій та товарів у консоль
	console.log(categories);
	console.log(products);

	// Функція для перемішування масиву випадковим чином
	const shuffleArray = (array) => {
		const shuffled = array.slice();
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Створюємо об'єкт для зберігання випадкових товарів для кожної категорії
	const randomProductsByCategory = {};

	// Перемішуємо товари для кожної категорії окремо
	if (categories && products) {
		categories.forEach((category) => {
			// Фільтруємо товари для поточної категорії
			const productsInCategory = products.filter(
				(product) => product.categories === category.name
			);
			// Перемішуємо товари для поточної категорії
			const shuffledProducts = shuffleArray(productsInCategory);
			// Вибираємо перші 3 випадкових товари для поточної категорії
			const selectedProducts = shuffledProducts.slice(0, 3);
			// Зберігаємо їх у об'єкті
			randomProductsByCategory[category.name] = selectedProducts;
		});
	}

	// Повертаємо компонент з відображенням отриманих даних
	return (
		<div className={styles.home}>
			<HomePageSlider />

			<div className={styles.home__container}>
				<div className={styles.home__cosmeticsContainer}>
					{categories &&
						categories.slice(0, 3).map((category, index) => (
							<div
								className={`${styles.home__cosmeticsCategory} ${index === 1 ? styles.reverseFlexDirection : ''}`}
								key={category.name}
							>
								<CosmeticCategory
									image={{ src: category.imgUrl, alt: category.name }}
									category={category.id}
									to={`/catalog/${category.id}`}
								/>
								<div className={styles.home__cosmeticsProducts}>
									{/* Відображення товарів для даної категорії */}
									{randomProductsByCategory[category.name] &&
										randomProductsByCategory[category.name].map((product) => (
											<ProductCard key={product.itemNo} product={product} />
										))}
								</div>
							</div>
						))}
				</div>
				<div className={styles.home__uniqueContainer}>
					<Unique
						imageUrl={uniqueMainImgUrl}
						isRepresentative={true}
						flexDirection="row-reverse"
						focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
						content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
					/>
				</div>

				<div className={styles.home__socialMediaContainer}>
					<SocialMedia text="Boltaeva - this is a real society of girls who show love to themselves" />

					<div className={styles.home__socialMediaBtn}>
						<SocialMediaBtn
							icons={[
								{
									src: InstagramUrl,
									alt: "Instagram icon",
									to: "https://www.instagram.com/beauty.shop.ek/",
								},
							]}
						/>
					</div>
				</div>

				<div className={styles.home__mediaImages_visible}>
					<SocialMediaImages
						socialMediaImages={[
							{
								src: SocialImgUrl1,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl2,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl1,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl2,
								alt: "Social Media Image",
							},
						]}
					/>
				</div>

				<div className={styles.home__mediaImages_hidden}>
					<SocialMediaImages
						socialMediaImages={[
							{
								src: SocialImgUrl3,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl4,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl3,
								alt: "Social Media Image",
							},
							{
								src: SocialImgUrl4,
								alt: "Social Media Image",
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
