import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import ProductTest1Img from "../../assets/img/product-test1.jpg";
import ProductTest3Img from "../../assets/img/product-test3.jpg";
import useDeviceType from "../../helpers/getDeviceType";

function ProductSlider({ settings }) {
  const { isDesktop } = useDeviceType();
  const isSwipeable = isDesktop ? false : true;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  const productSliderSettings = {
    responsive: responsive,
    swipeable: isSwipeable,
    draggable: isSwipeable,
    renderButtonGroupOutside: true,
    showDots: false,
    arrows: false,
    partialVisible: true,
    autoPlay: true,
  };
  return (
    <Carousel {...productSliderSettings} {...settings}>
      {/* Test . Here product-cards*/}
      <img src={ProductTest1Img}></img>
      <img src={ProductTest3Img}></img>
      <img src={ProductTest1Img}></img>
      <img src={ProductTest3Img}></img>
      <img src={ProductTest1Img}></img>
      <img src={ProductTest3Img}></img>

    </Carousel>
  );
}
ProductSlider.propTypes = {
  settings: PropTypes.object,
};
export default ProductSlider;
