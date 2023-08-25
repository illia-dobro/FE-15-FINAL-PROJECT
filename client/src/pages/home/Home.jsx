import HomePageSlider from "../../components/homePageSlider";
import Unique from "../../components/unique";
import SocialMedia from "../../components/socialMedia";
import SocialMediaBtn from "../../components/buttons/socialMediaBtn";
import SocialMediaImages from "../../components/socialMediaImages";
import { useGetCategoriesQuery } from "../../app/services/catalogApi";
import CosmeticCategory from "../../components/cosmeticCategory";

import uniqueMainImgUrl from "../../assets/unique_main.png";
import InstagramUrl from "../../components/buttons/socialMediaBtn/Instagram.png";
import SocialImgUrl1 from "../../components/socialMediaImages/socialImg1.png";
import SocialImgUrl2 from "../../components/socialMediaImages/socialImg2.png";
import SocialImgUrl3 from "../../components/socialMediaImages/socialImg3.png";
import SocialImgUrl4 from "../../components/socialMediaImages/socialImg4.png";

import styles from "./Home.module.scss";

function Home() {
	const { data: categories } = useGetCategoriesQuery();

	return (
		<div className={styles.home}>
			<HomePageSlider />
			<div className={styles.home__container}>
				<div className={styles.home__cosmeticsContainer}>
					{categories &&
						categories.slice(0, 3).map((category, index) => (
							<div className={`${styles.home__careCosmetics} ${index === 1 ? styles.reverseFlexDirection : ''}`} key={category.name}>
								<CosmeticCategory
									image={{ src: category.imgUrl, alt: category.name }}
									category={category.name}
									to={`/catalog/${category.name}`}
								/>
								<div className={styles.home__cosmeticsImages}>
									{/* Додайте зображення тут */}
								</div>
							</div>
						))}
				</div>
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
	);
}

export default Home;


