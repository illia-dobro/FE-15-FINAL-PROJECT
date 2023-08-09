import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';
import PropTypes from "prop-types";

function ProductDetailSlider({imageUrl, sliderSettings}) {

  return (
    <ImageGallery items={imageUrl} {...sliderSettings}/>
  )
}
ProductDetailSlider.propTypes = {
  imageUrl: PropTypes.array.isRequired,
  sliderSettings: PropTypes.object
};
export default ProductDetailSlider;