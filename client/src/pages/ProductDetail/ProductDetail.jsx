import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../services/productApi";
import ProductDetailCard from "../../layouts/prodcutDetailCard";
import HeartsLoader from "../../components/heartsLoader";
import PageNotFound from "../PageNotFound";
import "./productDetail.scss";

function ProductDetail() {
  const { data } = useGetAllProductsQuery();
  const { url } = useParams();
  
 
  if (!data) {
    return (
      <HeartsLoader />
    );
  }
  const product = data.find((product) => product.itemNo === url);

  return (
    <section className="product-detail">
      {product ? <ProductDetailCard product={product} /> : <PageNotFound/> }
    </section>
  );
}
export default ProductDetail;
