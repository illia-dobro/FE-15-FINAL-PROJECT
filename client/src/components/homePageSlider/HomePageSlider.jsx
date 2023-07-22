import Slider from 'react-slick';
import image1 from '../homePageSlider/main-1.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../homePageSlider/styles.css'
import styles from '../homePageSlider/HomePageSlider.module.scss';

const HomePageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                <div>
                    <img src={image1} alt='Beauty image' className={styles.slider__image} />
                    <p className={styles.slider__header}>Capsule Collection</p>
                </div>
                <div>
                    <img src='https://lush.com.ua/image/catalog/sleep_routines_20200033.jpg' alt='Beauty image' className={styles.slider__image} />
                </div>
                <div>
                    <img src='https://kodi-professional.ua/image/data/blog/art23/1.jpg' alt='Beauty image' className={styles.slider__image} />
                </div>
            </Slider>
        </div>
    );
  };

export default HomePageSlider;