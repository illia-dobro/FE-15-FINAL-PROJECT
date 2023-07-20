import ProductsList from "./components/productsList";
import styles from "./Catalog.module.scss"


const Catalog = () => {
    return <div className={styles.main}>
        <ProductsList/>
    </div>
}

export default Catalog