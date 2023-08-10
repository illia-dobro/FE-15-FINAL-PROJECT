import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../services/productApi";
import ProductDetailLayout from "../../layouts/prodcutDetailLayout";
import HeartsLoader from "../../components/heartsLoader";
import PageNotFound from "../PageNotFound";
import "./productDetail.scss";

function ProductDetail() {
  const { data } = useGetAllProductsQuery();
  const { url } = useParams();
  
 
  if (!data) {
    return (
      <HeartsLoader wrapperClass="hearts"/>
    );
  }
  const product = data.find((product) => product.itemNo === url);

  return (
    <section className="product-detail">
      {product ? <ProductDetailLayout product={product} /> : <PageNotFound/> }
    </section>
  );
}
export default ProductDetail;
