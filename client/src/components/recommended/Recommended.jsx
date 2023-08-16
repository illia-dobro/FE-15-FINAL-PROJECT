import ProductSlider from "../productSlider";
import CustomBtnGroup from "../recommended/customBtnGroup/CustomBtnGroup";
import "./recommended.scss";

function Recommended() {
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
        />
      </div>
    </div>
  );
}

export default Recommended;
