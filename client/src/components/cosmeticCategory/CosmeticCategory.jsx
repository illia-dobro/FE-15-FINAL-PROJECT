import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetFilteredProductsQuery } from '../../app/services/productApi';
import ProductCard from '../productCard';

import styles from './CosmeticCategory.module.scss';

const CosmeticCategory = ({ category = {}}) => {
    const categoryName = category.name.slice(0,4);

    const { data: productsData, isSuccess: isProductsSuccess } = useGetFilteredProductsQuery(`categories=${category.name}`);
    const categoryProducts = isProductsSuccess && productsData.products;

    return (
        <div className={styles.category} >
            <NavLink to={`/catalog/${category.name}`} className={styles.category__link}>
                <img src={category.imgUrl} alt={`${categoryName} Cosmetics Product`} className={styles.category__image} />
                <p className={styles.category__name}>{categoryName}</p>
            </NavLink>

            <div className={styles.category__products}>
                {categoryProducts && categoryProducts.slice(0,3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

CosmeticCategory.propTypes = {
    category: PropTypes.object,
}

export default CosmeticCategory;