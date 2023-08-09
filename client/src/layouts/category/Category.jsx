import ProductsList from "../productsList/index.js";
import { useParams } from "react-router-dom";
import Filters from "../../components/filters/index.js";
import {
  useCategoriesQuery,
  useProductsQuery,
} from "../../app/services/api.js";

const Category = () => {
  const { categoryName } = useParams();

  const { data: categories, isSuccess: isCategoriesSuccess } =
    useCategoriesQuery();
  const { data: products, isSuccess } = useProductsQuery();

  const category =
    isCategoriesSuccess &&
    categories.find((category) => category.name === categoryName);

  return (
    <>
      <h2 className="text-center text-7xl mx-auto my-4">{category.name}</h2>

      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <img
          src={category.imgUrl}
          alt={"banner"}
          className="w-full h-80 object-cover overflow-hidden rounded-md"
        />
      </div>

      <Filters>{isSuccess && <ProductsList products={products} />}</Filters>
    </>
  );
};

export default Category;
