import ProductsList from "../productsList/index.js";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <>

        <h2 className="text-center text-7xl pt-4">{categoryName}</h2>

      <ProductsList />
    </>
  );
};

export default Category;
