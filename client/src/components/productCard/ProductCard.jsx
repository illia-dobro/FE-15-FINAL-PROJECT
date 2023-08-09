import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <a href={product.href} className="group ">
      <div
        className={
          styles.product_card +
          " aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7"
        }
      >
        <img
          src={product.imageUrls[0]}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75 "
        />
        <div className="p-6 flex justify-between items-center gap-2 group-hover:bg-[#AC8F78]">
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="text-lg font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
