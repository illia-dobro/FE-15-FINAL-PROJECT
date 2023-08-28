// import HomePageSlider from "../../components/homePageSlider";
// import CosmeticCategory from "../../components/cosmeticCategory";
// import Unique from "../../components/unique";
// import SocialMedia from "../../components/socialMedia";
// import SocialMediaBtn from "../../components/buttons/socialMediaBtn";
// import SocialMediaImages from "../../components/socialMediaImages";

// import careCosmeticsImg from "../../components/cosmeticCategory/care-cosmetics.png";
// import beautyCosmeticsImg from "../../components/cosmeticCategory/beauty-cosmetics.png";
// import browsCosmeticsImg from "../../components/cosmeticCategory/brows-cosmetics.png";
// import uniqueMainImgUrl from "../../assets/unique_main.png";
// import InstagramUrl from "../../components/buttons/socialMediaBtn/Instagram.png";
// import SocialImgUrl1 from "../../components/socialMediaImages/socialImg1.png";
// import SocialImgUrl2 from "../../components/socialMediaImages/socialImg2.png";
// import SocialImgUrl3 from "../../components/socialMediaImages/socialImg3.png";
// import SocialImgUrl4 from "../../components/socialMediaImages/socialImg4.png";

// import styles from "./Home.module.scss";

// /* our home page */

// function Home() {
//   return (
//     <div className={styles.home}>
//       <HomePageSlider />

//       <div className={styles.home__container}>
//         <div className={styles.home__cosmeticsContainer}>
//           <div className={styles.home__careCosmetics}>
//             <CosmeticCategory
//               image={{ src: careCosmeticsImg, alt: "Care Cosmetics Product" }}
//               category="Face"
//               to="/catalog"
//             />

//             <div className={styles.home__cosmeticsImages}>
//               {/* <img src={careCosmeticsImg}></img> */}
//             </div>
//           </div>

//           <div className={styles.home__beautyCosmetics}>
//             <CosmeticCategory
//               image={{
//                 src: beautyCosmeticsImg,
//                 alt: "Beauty Cosmetics Product",
//               }}
//               category="Hair"
//               to="/catalog"
//             />

//             <div className={styles.home__cosmeticsImages}>
//               {/* <img src={careCosmeticsImg}></img> */}
//             </div>
//           </div>

//           <div className={styles.home__browsCosmetics}>
//             <CosmeticCategory
//               image={{ src: browsCosmeticsImg, alt: "Brows Cosmetics Product" }}
//               category="Brows"
//               to="/catalog"
//             />

//             <div className={styles.home__cosmeticsImages}>
//               {/* <img src={careCosmeticsImg}></img> */}
//             </div>
//           </div>
//         </div>

//         <div className={styles.home__uniqueContainer}>
//           <Unique
//             imageUrl={uniqueMainImgUrl}
//             isRepresentative={true}
//             flexDirection="row-reverse"
//             focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
//             content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
//           />
//         </div>

//         <div className={styles.home__socialMediaContainer}>
//           <SocialMedia text="Boltaeva - this is a real society of girls who show love to themselves" />

//           <div className={styles.home__socialMediaBtn}>
//             <SocialMediaBtn
//               icons={[
//                 {
//                   src: InstagramUrl,
//                   alt: "Instagram icon",
//                   to: "https://www.instagram.com/beauty.shop.ek/",
//                 },
//               ]}
//             />
//           </div>
//         </div>

//         <div className={styles.home__mediaImages_visible}>
//           <SocialMediaImages
//             socialMediaImages={[
//               {
//                 src: SocialImgUrl1,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl2,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl1,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl2,
//                 alt: "Social Media Image",
//               },
//             ]}
//           />
//         </div>

//         <div className={styles.home__mediaImages_hidden}>
//           <SocialMediaImages
//             socialMediaImages={[
//               {
//                 src: SocialImgUrl3,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl4,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl3,
//                 alt: "Social Media Image",
//               },
//               {
//                 src: SocialImgUrl4,
//                 alt: "Social Media Image",
//               },
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useGetCategoriesQuery } from "../../app/services/catalogApi";
import HomePageSlider from "../../components/homePageSlider";
import CosmeticCategory from "../../components/cosmeticCategory";
import Unique from "../../components/unique";
import SocialMedia from "../../components/socialMedia";
import SocialMediaBtn from "../../components/buttons/socialMediaBtn";
import SocialMediaImages from "../../components/socialMediaImages";

import uniqueMainImgUrl from "../../assets/unique_main.png";
import InstagramUrl from "../../components/buttons/socialMediaBtn/Instagram.png";
import SocialImgUrl1 from "../../components/socialMediaImages/socialImg1.png";
import SocialImgUrl2 from "../../components/socialMediaImages/socialImg2.png";
import SocialImgUrl3 from "../../components/socialMediaImages/socialImg3.png";
import SocialImgUrl4 from "../../components/socialMediaImages/socialImg4.png";

import styles from "./Home.module.scss";

/* our home page */

function Home() {
  const { data: categories, isSuccess: isCategoriesSuccess } = useGetCategoriesQuery();

  return (
    <div className={styles.home}>
      <HomePageSlider />

      <div className={styles.home__container}>
        <div className={styles.home__cosmeticsContainer}>
          {isCategoriesSuccess &&
            categories.map((category) => {
              return (
                <CosmeticCategory
                  key={category.id}
                  category={category}
                />
              )
            })
          }
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