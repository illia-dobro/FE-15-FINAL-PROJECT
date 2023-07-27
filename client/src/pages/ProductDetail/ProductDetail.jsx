import { LiaShoppingBagSolid } from "react-icons/lia";
import { formatCurrency } from "../../helpers/currencyFormatter";
import { useParams } from "react-router-dom";
import ProductDetailSlider from "../../components/productDetailSlider";
import Recommended from "../../components/recommended";
import productsTest from "../../helpers/productsTest";
import deliveryInfo from "../../static/deliveryInfoTest";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import useDeviceType from "../../helpers/getDeviceType";
import Unique from "../../components/unique";
import Button from "../../components/buttons/button";
import Tabs from "../../components/tabs";
import "./productDetail.scss";


const ProductDetail = () => {
  const { url } = useParams();
  const {isDesktop} = useDeviceType();

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

  /* Test */
  const product = productsTest.find((product) => product.productUrl === url);
  const productTabs = [
    { label: "Product", content: product.myCustomParam },
    { label: "Specifications", content: product.brand },
    { label: "Delivery", content: deliveryInfo },
  ];
  const productPictures = product.imageUrl.map((image) => ({
    original: image,
    thumbnail: image
  }));

  return (
    <section className="product-detail">
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
        <Unique/>
        <Unique/> 
      </div>
      <Recommended/>
    </section>
  );
};

export default ProductDetail;
