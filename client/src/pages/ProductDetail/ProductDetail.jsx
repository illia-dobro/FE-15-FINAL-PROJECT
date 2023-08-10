import { useParams } from "react-router-dom";
import { useGetProductByNumberQuery } from "../../app/services/productApi";
import ProductDetailLayout from "../../layouts/prodcutDetailLayout";
import HeartsLoader from "../../components/heartsLoader";
import PageNotFound from "../PageNotFound";
import "./productDetail.scss";

function ProductDetail() {
  const { url } = useParams();
  const { data: product, isLoading, error } = useGetProductByNumberQuery(url);

  if (!product) {
    return <HeartsLoader wrapperClass="hearts" />;
  }
  if (isLoading) {
    return <HeartsLoader wrapperClass="hearts" />;
  }
  if (error) {
    return <PageNotFound />;
  }
  return (
    <section className="product-detail">
      {product ? <ProductDetailLayout product={product} /> : <PageNotFound />}
    </section>
  );
}
export default ProductDetail;
