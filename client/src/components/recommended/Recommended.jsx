import ProductSlider from "../productSlider";
import CustomBtnGroup from "../recommended/customBtnGroup/CustomBtnGroup";
import PropTypes from 'prop-types';

import "./recommended.scss";

function Recommended({products}) {
  if (products.length === 0) {
    return null; 
  }
  return (
    <div className="product-recommended">
      <div className="product-recommended__descr">
        <p>
          We care about your beauty, so we recommend that you consider other
          products
        </p>
      </div>
      <div className="product-recommended__slider">
        <ProductSlider
          settings={{
            customButtonGroup: <CustomBtnGroup />,
            arrows: false,
            itemClass: "recommended-slide",
          }}
          products={products}
        />
      </div>
    </div>
  );
}
export default Recommended;

Recommended.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};