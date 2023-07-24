import { useParams } from "react-router-dom";
import productsTest from "../../helpers/productsTest";
import deliveryInfo from "../../helpers/deliveryInfoTest";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import Button from "../../components/buttons/button";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Tabs from "../../components/tabs";
import { formatCurrency } from "../../helpers/currencyFormatter";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import "./productDetail.scss";

const ProductDetail = () => {
  const { url } = useParams();
  
  const sliderSettings = {
    showThumbnails: true,
    showPlayButton: false,
    showFullscreenButton: false,
    showNav: false,
    slideInterval: 2000,
    infinite: true,
    showGalleryThumbnails: true,
    thumbnailPosition: "left",
  };
  /* Test */
  const product = productsTest.find((product) => product.productUrl === url);
  const productCardTabs = [
    { label: "Product", content: product.myCustomParam },
    { label: "Specifications", content: product.brand },
    { label: "Delivery", content: deliveryInfo },
  ];

  return (
    <section className="product-detail">
      <div className="product-detail__flex">
        <div className="product-detail__left">
          <ProductSlider
            imageUrl={product.imageUrl}
            sliderSettings={sliderSettings}
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
                tabs={productCardTabs}
                classNameList="product-detail__tabs-btns"
                classNamePanel="product-detail__tabs-content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
