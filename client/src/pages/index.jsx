import HomePageSlider from "../components/homePageSlider";
import CosmeticCategory from "../components/cosmeticCategory/CosmeticCategory";
import Unique from "../components/unique/Unique";
import SocialMedia from "../components/socialMedia";
import SocialMediaImages from "../components/socialMediaImages/SocialMediaImages";

import '../index.scss';

/* our home page */
function Home() {
  return (
    <div className="home-container">
      <HomePageSlider />

      <div className="home-cosmeticsContainer">
        <div className="homeCosmetics careCosmetics" >
          <CosmeticCategory image={{src: '../../src/components/cosmeticCategory/care-cosmetics.png', alt: 'Care Cosmetics Product' }} category='Care' to='/catalog'/>

          <div className="homeCosmetics-images">

          </div>
        </div>

        <div className="homeCosmetics beautyCosmetics">
          <CosmeticCategory image={{src: '../../src/components/cosmeticCategory/beauty-cosmetics.png', alt: 'Beauty Cosmetics Product' }} category='Beauty' to='/catalog'/>

        </div>

        <div className="homeCosmetics browsCosmetics">
          <CosmeticCategory image={{src: '../../src/components/cosmeticCategory/brows-cosmetics.png', alt: 'Brows Cosmetics Product' }} category='Brows' to='/catalog'/>

        </div>
      </div>
      
      <div className='home-uniqueContainer'>
        <Unique image={{src: '../../src/assets/unique_main.png', alt: 'Our product'}} representName="Zara Boltaeva" representPosition="CEO, founder" representSignature={{src: '../../src/assets/unique_signature.svg', alt: 'CEO signature'}} />
      </div>

      <div className="home-socialMediaContainer">
        <SocialMedia
          text='Boltaeva - this is a real society of girls who show love to themselves'
          socialMediaIcons={[{
            src: '../../src/components/socialMediaBtn/Instagram.png',
            alt: 'Instagram icon',
            to: 'https://www.instagram.com/beauty.shop.ek/'
          }]}
        />
      </div>

      <div className="home-mediaImagesVisible">
        <SocialMediaImages 
          socialMediaImages = {[
            {
              src: '../../src/components/socialMediaImages/socialImg1.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg2.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg1.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg2.png',
              alt: 'Social Media Image',
            },
          ]}
        />
      </div>

      <div className="home-mediaImagesHidden">
        <SocialMediaImages 
          socialMediaImages = {[
            {
              src: '../../src/components/socialMediaImages/socialImg3.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg4.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg3.png',
              alt: 'Social Media Image',
            },
            {
              src: '../../src/components/socialMediaImages/socialImg4.png',
              alt: 'Social Media Image',
            }
          ]}
        />
      </div>

    </div>
  )
}

export default Home;