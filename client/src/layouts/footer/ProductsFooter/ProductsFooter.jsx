import { Link } from 'react-router-dom';
import { heading, list } from '../Footer.module.scss';
import { wrapper } from './ProductsFooter.module.scss';

// it is for test, actually this data we get from server(redux store)
const dataCategory = [
  { id: 1, name: 'Care cosmetics', url: '#' },
  { id: 2, name: 'Eyebrow cosmetics', url: '#' },
  { id: 3, name: 'Decorative cosmetics', url: '#' },
  { id: 4, name: 'New in the collection', url: '#' },
  { id: 5, name: 'Box and complect', url: '#' },
  { id: 6, name: 'Accessories', url: '#' },
];

const categories = dataCategory.map(({ id, name, url }) => {
  return (
    <li key={id}>
      <Link to={url}>{name}</Link>
    </li>
  );
});

function ProductsFooter() {
  return (
    <div className={wrapper}>
      <h3 className={heading}>Products</h3>
      <ul className={list}>{categories}</ul>
    </div>
  );
}

export default ProductsFooter;
