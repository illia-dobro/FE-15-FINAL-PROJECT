import useDeviceType from '../../helpers/getDeviceType';
import ProductDetailSlider from "../../components/productDetailSlider";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Recommended from "../../components/recommended";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import { formatCurrency } from "../../helpers/currencyFormatter";
import DeliveryInfo from "../../components/static/DeliveryInfo";
import Unique from "../../components/unique";
import Button from "../../components/buttons/button";
import Tabs from "../../components/tabs";

function ProductDetailLayout({product}) {
  const { isDesktop } = useDeviceType();

  const thumbnailPosition = isDesktop ? "left" : "bottom";
  const productDetailSliderSettings = {
    showThumbnails: true,
    showPlayButton: true,
    showFullscreenButton: true,
    showNav: false,
    slideInterval: 3000,
    slideDuration: 500,
    infinite: true,
    showGalleryThumbnails: true,
    thumbnailPosition: thumbnailPosition,
  };

  const spesificationTabsContent = (
    <ul>
      <li>
        Brand:<strong> {product.brand}</strong>
      </li>
      <li>
        Country:<strong> {product.manufacturerCountry}</strong>
      </li>
      <li>
        <strong>{product.sizes}</strong>{" "}
      </li>
      <li>{product.composition}</li>
    </ul>
  );
  const productTabs = [
    { label: "Product", content: product.description },
    { label: "Specifications", content: spesificationTabsContent },
    { label: "Delivery", content: <DeliveryInfo /> },
  ];
  const productPictures = product.imageUrls.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  return (
      <div className='product-detail__card'>
        <div className="product-detail__flex">
          <div className="product-detail__left">
            <ProductDetailSlider
              imageUrl={productPictures}
              sliderSettings={productDetailSliderSettings}
            />
          </div>
          <div className="product-detail__right">
            <div className="product-detail__right-content">
              <FavoriteBtn />
              <h2>{product.name}</h2>
              <div className="product-detail__quantity-price">
                <QuantityBtns className="quantityBtnsLg" />
                <span className="price">
                  {formatCurrency(product.currentPrice)}
                </span>
              </div>
              <Button className="button button-color--secondary">
                <LiaShoppingBagSolid />
                <span>Add to shopping cart</span>
              </Button>
              <div className="product-detail__tabs">
                <Tabs
                  tabs={productTabs}
                  classNameList="product-detail__tabs-btns"
                  classNamePanel="product-detail__tabs-content"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Unique />
          <Unique />
        </div>
        <Recommended />
      </div>
 
  )
}

export default ProductDetailLayout;