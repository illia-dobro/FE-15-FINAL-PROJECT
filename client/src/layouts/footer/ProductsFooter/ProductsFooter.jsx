import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../app/services/catalogApi';
import SkeletonFooter from '../../../helpers/loaders/SkeletonFootet'
import { heading, list } from '../Footer.module.scss';
import { wrapper } from './ProductsFooter.module.scss';

function ProductsFooter() {
  const {data, isError, isSuccess, isLoading} = useGetCategoriesQuery();

  let categories;

  if(isError) {
    return null
  } else if(isLoading){
    categories = <SkeletonFooter/>
  } else if(isSuccess){
    categories = data.map(({ id, name}) => {
      return (
        <li key={id}>
          <Link to={`catalog/${name}`}>{name}</Link>
        </li>
      );
    })
    }

  return (
    <div className={wrapper}>
      <h3 className={heading}>Products</h3>
      <ul className={list}>{categories}</ul>
    </div>
  );
}

export default ProductsFooter;
