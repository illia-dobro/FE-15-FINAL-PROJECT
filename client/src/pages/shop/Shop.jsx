import Order from '../../components/order';

import styles from './Shop.module.scss';

function Shop() {
  return (
    // <span>I am Shoping Cart!</span>
    <div className={styles.shop}>
      <div className={styles.shop__checkout}>
        

      </div>

      <div className={styles.shop__order}>
        <Order />
      </div>
      
    </div>
  )
}

export default Shop;