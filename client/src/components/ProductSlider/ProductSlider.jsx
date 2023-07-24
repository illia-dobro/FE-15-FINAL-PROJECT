
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

function ProductSlider({imageUrl, sliderSettings}) {
  
  return (
    <ImageGallery items={imageUrl} {...sliderSettings}/>
  )
}

export default ProductSlider;