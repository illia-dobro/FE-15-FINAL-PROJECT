import HomePageSlider from "../components/homePageSlider";
import CosmeticCategory from "../components/cosmeticCategory/CosmeticCategory";
import Unique from "../components/unique/Unique";
import SocialMedia from "../components/socialMedia";
import SocialMediaBtn from "../components/socialMediaBtn";
import SocialMediaImages from "../components/socialMediaImages/SocialMediaImages";

import careCosmeticsImg from '../components/cosmeticCategory/care-cosmetics.png';
import beautyCosmeticsImg from '../components/cosmeticCategory/beauty-cosmetics.png';
import browsCosmeticsImg from '../components/cosmeticCategory/brows-cosmetics.png';
import uniqueMainImgUrl from '../assets/unique_main.png';
import uniqueSignatureUrl from '../assets/unique_signature.svg';
import InstagramUrl from '../components/socialMediaBtn/Instagram.png';
import SocialImgUrl1 from '../components/socialMediaImages/socialImg1.png';
import SocialImgUrl2 from '../components/socialMediaImages/socialImg2.png';
import SocialImgUrl3 from '../components/socialMediaImages/socialImg3.png';
import SocialImgUrl4 from '../components/socialMediaImages/socialImg4.png';

import '../index.scss';

/* our home page */
function Home() {
  return (
    <div className="home-container">
      <HomePageSlider />

      <div className="home-cosmeticsContainer">
        <div className="homeCosmetics careCosmetics" >
          <CosmeticCategory image={{src: careCosmeticsImg, alt: 'Care Cosmetics Product' }} category='Care' to='/catalog'/>

          <div className="home-cosmeticsImages">
            {/* <img src={careCosmeticsImg}></img> */}

          </div>
        </div>

        <div className="homeCosmetics beautyCosmetics">
          <CosmeticCategory image={{src: beautyCosmeticsImg, alt: 'Beauty Cosmetics Product' }} category='Beauty' to='/catalog'/>

        </div>

        <div className="homeCosmetics browsCosmetics">
          <CosmeticCategory image={{src: browsCosmeticsImg, alt: 'Brows Cosmetics Product' }} category='Brows' to='/catalog'/>

        </div>
      </div>
      
      <div className='home-uniqueContainer'>
        <Unique image={{src: uniqueMainImgUrl, alt: 'Our product'}} representName="Zara Boltaeva" representPosition="CEO, founder" representSignature={{src: uniqueSignatureUrl, alt: 'CEO signature'}} />
      </div>

      <div className="home-socialMediaContainer">
        <SocialMedia
          text='Boltaeva - this is a real society of girls who show love to themselves'
        />

        <div className="home-socialMediaBtn">
          <SocialMediaBtn 
            icons={[{
              src: InstagramUrl,
              alt: 'Instagram icon',
              to: 'https://www.instagram.com/beauty.shop.ek/'
            }]} />
        </div>
      </div>

      <div className="home-mediaImagesVisible">
        <SocialMediaImages 
          socialMediaImages = {[
            {
              src: SocialImgUrl1,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl2,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl1,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl2,
              alt: 'Social Media Image',
            },
          ]}
        />
      </div>

      <div className="home-mediaImagesHidden">
        <SocialMediaImages 
          socialMediaImages = {[
            {
              src: SocialImgUrl3,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl4,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl3,
              alt: 'Social Media Image',
            },
            {
              src: SocialImgUrl4,
              alt: 'Social Media Image',
            },
          ]}
        />
      </div>

    </div>
  )
}

export default Home;