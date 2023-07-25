import HomePageSlider from "../components/homePageSlider";
import Unique from "../components/unique/Unique";
import SocialMedia from "../components/socialMedia";
import SocialMediaImages from "../components/socialMediaImages/SocialMediaImages";

import uniqueMainImgUrl from '../assets/unique_main.png';
import uniqueSignatureUrl from '../assets/unique_signature.svg';
import instagramUrl from '../components/SocialMediaBtn/Instagram.png';
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

      <div className='home-uniqueContainer'>
        <Unique image={{src: uniqueMainImgUrl, alt: 'Our product'}} representName="Zara Boltaeva" representPosition="CEO, founder" representSignature={{src: uniqueSignatureUrl, alt: 'CEO signature'}} />
      </div>

      <div className="home-socialMediaContainer">
        <SocialMedia
          text='Boltaeva - this is a real society of girls who show love to themselves'
          socialMediaIcons={[{
            src: instagramUrl,
            alt: 'Instagram icon',
            to: 'https://www.instagram.com/beauty.shop.ek/'
          }]}
        />
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

