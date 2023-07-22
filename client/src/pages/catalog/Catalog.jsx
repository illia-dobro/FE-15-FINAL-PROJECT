import ProductsList from "../../layouts/productsList";
import styles from "./Catalog.module.scss"


const Catalog = () => {
    return <div className={styles.catalog_page}>
        <ProductsList/>
    </div>
}

export default Catalog