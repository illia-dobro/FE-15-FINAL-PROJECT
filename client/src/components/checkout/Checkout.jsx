import FormField from '../formField/FormField';
import FavoriteBtn from '../buttons/favoriteBtn';
import ChooseBtn from '../buttons/chooseBtn/ChooseBtn';

import signInIcon from '../../pages/shop/signIn.svg';

import styles from './Checkout.module.scss';

const Checkout = () => {
    return (
        <div className={styles.checkout}>

            <form className={styles.checkout__form}>
                <h3 className={styles.checkout__header}>Checkout</h3>
                <FormField label='Surname, name and patronymic' id="name" type='text'/>
                <FormField label='Country, city, address' id="address" type='text'/>
                <FormField label='Contact number' id="phone" type='number'/>
                <FormField label='Email' id="email" type='email'/>
            </form>

            <div className={styles.checkout__details}>
                <FavoriteBtn />

                <div className={styles.details__signIn}>
                    <p className={styles.details__title}>Set up in a couple of minutes</p>
                    <p className={styles.details__signIn_text}>If you are already registered on the site, then you just need to enter your profile so as not to enter information again.</p>
                    <button className={styles.details__signIn_icon}>
                        <img src={signInIcon}></img>
                        <span>Sign in</span>
                    </button>
                </div>

                <div className={styles.details__shipping}>
                    <p className={styles.details__title}>Choose a shipping method</p>
                    <div className={styles.details__shipping_chooseBtns}>
                        <ChooseBtn text='FedEX'/>
                        <ChooseBtn text='To door'/>
                    </div>
                    <p className={styles.details__costCalc}>Shipping cost is calculated individually by the manager</p>
                </div>
                
            </div>
        
        </div>
    )
}

export default Checkout;