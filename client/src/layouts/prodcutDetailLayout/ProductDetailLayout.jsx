import PropTypes from "prop-types";
import useDeviceType from "../../helpers/getDeviceType";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailSlider from "../../components/productDetailSlider";
import { LiaCheckCircle, LiaShoppingBagSolid } from "react-icons/lia";
import Recommended from "../../components/recommended";
import QuantityBtns from "../../components/buttons/quantityBtns/QuantityBtns";
import FavoriteBtn from "../../components/buttons/favoriteBtn";
import { formatCurrency } from "../../helpers/currencyFormatter";
import uniqueMainImgUrl from "../../assets/unique_main.png";
import uniqueMainImgUrl2 from "../../assets/unique_main2.jpg";
import DeliveryInfo from "../../components/static/DeliveryInfo";
import Unique from "../../components/unique";
import Button from "../../components/buttons/button";
import Tabs from "../../components/tabs";
import { useGetFilteredProductsQuery } from "../../app/services/productApi";
import { isTokenUser } from "../../app/slices/authSlice";
import {
  useAddProductToCartMutation,
  useDecreaseProductQuantityMutation,
} from "../../app/services/cartApi";
import {
  addToCart,
  decreaseQty,
  initializeCart,
} from "../../app/slices/cartSlice";
import styles from "../../pages/shop/shop.module.scss";
import { useState } from "react";

function ProductDetailLayout({ product }) {
  const { isDesktop } = useDeviceType();
  const [counter, setCounter] = useState(1);

  // Select only one
  const isUserAuth = Boolean(useSelector(isTokenUser));
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [addProductToDb] = useAddProductToCartMutation();
  const [decreaseProductFromDb] = useDecreaseProductQuantityMutation();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.products);

  const inCart = cart.find((item) => item.product._id === product._id);
  const inCartQty = inCart?.cartQuantity;

  const handleDecreaseQty = async (product) => {
    if (inCart) {
      if (isLoggedIn) {
        const { data: responseCart } = await decreaseProductFromDb(product._id);
        dispatch(initializeCart(responseCart.products));
        return;
      }
      dispatch(decreaseQty({ product: product }));
    } else {
      if (counter > 1) setCounter(counter - 1);
    }
  };
  const handleIncreaseQty = async (product) => {
    if (inCart) {
      if (isLoggedIn) {
        const { data: responseCart } = await addProductToDb(product._id);
        dispatch(initializeCart(responseCart.products));
        return;
      }
      dispatch(addToCart({ product: product }));
    } else {
      setCounter(counter + 1);
    }
  };

  const handleAddToCart = async (product) => {
    if (isLoggedIn) {
      const { data: responseCart } = await addProductToDb(product._id);
      dispatch(initializeCart(responseCart.products));
      return;
    }
    dispatch(addToCart({ product: product }));
  };

  const { data: filteredProducts, isSuccess } = useGetFilteredProductsQuery(
    `categories=${product.categories}&product_type=${product.product_type}&enabled=true&perPage=8`
  );

  if (!filteredProducts) {
    return;
  }

  const recommendedProducts = filteredProducts.products.filter(
    (recommendedProduct) => product._id !== recommendedProduct._id
  );

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
  const specificationTabsContent = (
    <ul>
      <li>
        Brand:<strong> {product.brand}</strong>
      </li>
      <li>
        Country:<strong> {product.manufacturerCountry}</strong>
      </li>
      <li>
        <strong>{product.sizes}</strong>
      </li>
      <li>{product.composition}</li>
    </ul>
  );
  const productTabs = [
    { label: "Product", content: product.description },
    { label: "Specifications", content: specificationTabsContent },
    { label: "Delivery", content: <DeliveryInfo /> },
  ];
  const productPictures = product.imageUrls.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="product-detail__card">
      <div className="product-detail__flex">
        <div className="product-detail__left">
          <ProductDetailSlider
            imageUrl={productPictures}
            sliderSettings={productDetailSliderSettings}
          />
        </div>
        <div className="product-detail__right">
          <div className="product-detail__right-content">
            {isUserAuth && <FavoriteBtn id={product._id} />}
            <h2>{product.name}</h2>
            <div className="product-detail__quantity-price">
              <QuantityBtns
                handleIncrement={() => handleIncreaseQty(product)}
                handleDecrement={() => handleDecreaseQty(product)}
                count={inCart ? inCartQty : counter}
                className="quantityBtnsLg"
              />
              <span className="price">
                {formatCurrency(product.currentPrice)}
              </span>
            </div>
            <Button
              className="button button-color--secondary"
              action={() => handleAddToCart(product)}
              disabled={!!inCart}
            >
              {inCart ? (
                <>
                  <LiaCheckCircle />
                  <span>
                    {`Already ${inCartQty} in cart. Use ' + ' to add more`}
                  </span>
                </>
              ) : (
                <>
                  <LiaShoppingBagSolid />
                  <span>{`Add to shopping cart`}</span>
                </>
              )}{" "}
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
      <div className="unique">
        <Unique
          imageUrl={uniqueMainImgUrl}
          isRepresentative={false}
          flexDirection="row"
          focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
          content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
        />
        <Unique
          imageUrl={uniqueMainImgUrl2}
          isRepresentative={true}
          flexDirection="row-reverse"
          focus="Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail"
          content="The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market"
        />
      </div>
      {isSuccess && <Recommended products={recommendedProducts} />}
    </div>
  );
}

export default ProductDetailLayout;

ProductDetailLayout.propTypes = {
  product: PropTypes.object,
};
