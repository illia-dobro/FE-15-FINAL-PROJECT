import { useParams } from "react-router-dom";
import { useGetProductByNumberQuery } from "../../app/services/productApi";
import ProductDetailLayout from "../../layouts/prodcutDetailLayout";
import HeartsLoader from "../../components/heartsLoader";
import PageNotFound from "../PageNotFound";
import "./productDetail.scss";

function ProductDetail() {
  const { url } = useParams();
  const { data: product, isLoading, isError } = useGetProductByNumberQuery(url);

  if (isLoading) {
    return <HeartsLoader wrapperClass="hearts" />;
  }
  if (isError) {
    return <PageNotFound />;
  }
  return (
    <section className="product-detail">
      {product ? <ProductDetailLayout product={product} /> : <PageNotFound />}
    </section>
  );
}
export default ProductDetail;
