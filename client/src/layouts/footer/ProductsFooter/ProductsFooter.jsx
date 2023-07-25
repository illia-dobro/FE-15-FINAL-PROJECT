import { Link } from "react-router-dom";

// it is for test, actualy this data we get from server(redax store)
const dataCategory = [
  { id: 1, name: "Care cosmetics", url:"#" },
  { id: 2, name: "Eyebrow cosmetics", url:"#" },
  { id: 3, name: "Decorative cosmetics", url:"#" },
  { id: 4, name: "New in the collection", url:"#" },
  { id: 5, name: "Box and complect", url:"#" },
  { id: 6, name: "Accessories", url:"#" },
];

const categories = dataCategory.map(({id, name, url}) => {
  return (
    <li key={id}>
      <Link to={url}>{name}</Link>
    </li>
  );
});

function ProductsFooter() {
  return (
    <div className="flex-1">
      <h3 className="text-xl">Products</h3>
      <nav>
        <ul>
         {categories}
        </ul>
      </nav>
    </div>
  );
}

export default ProductsFooter;
