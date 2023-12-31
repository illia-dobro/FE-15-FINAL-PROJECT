import Slider from 'react-slick';
import image1 from '../homePageSlider/main-1.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

import styles from './HomePageSlider.module.scss';

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
                <div className={styles.slider__component}>
                    <img src={image1} alt='Beauty image' className={styles.slider__image} />
                    <p className={styles.slider__header}>Capsule Collection</p>
                </div>
                <div className={styles.slider__component}>
                    <img src='https://lush.com.ua/image/catalog/sleep_routines_20200033.jpg' alt='Beauty image' className={styles.slider__image} />
                </div>
                <div className={styles.slider__component}>
                    <img src='https://favoritti.com/upload/iblock/2c1/2c16737931d64560825e7e4528b5e80f.jpg' alt='Beauty image' className={styles.slider__image} />
                </div>
            </Slider>
        </div>
    );
  };

export default HomePageSlider;
