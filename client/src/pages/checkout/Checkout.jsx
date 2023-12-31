import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { usePlaceOrderMutation } from '../../app/services/api';
import { useDeleteCartMutation } from '../../app/services/cartApi'
import { selectCurrentUser } from '../../app/slices/authSlice';
import { initializeCart } from '../../app/slices/cartSlice';
import { toast } from 'react-toastify';
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io';
import { LuEdit2 } from 'react-icons/lu';
import OrderDetails from '../../components/orderDetails';
import signInIcon from '../../assets/images/signIn.svg';

import styles from './Checkout.module.scss';

function Checkout() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur',
  });

  const [placeOrder] = usePlaceOrderMutation();
  const [deleteCart] = useDeleteCartMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  let {
    _id,
    firstName: customerName,
    lastName: customerLastName,
    email: customerEmail,
    telephone,
  } = useSelector(selectCurrentUser);


  const orderFromStore = useSelector(state => state.cart.products);

  const onSubmit = async (data) => {
      const newOrder =
        {
          customerId: _id,
          deliveryAddress: {
            address: data.address,
          },
          shipping: data.shipping,
          paymentInfo: 'Credit card',
          status: 'not shipped',
          email: data.email,
          mobile: data.phoneNumber,
          letterSubject: 'Thank you for order! You are welcome!',
          letterHtml:
            '<h1>Your order is placed</p>',
        }


      try {
        isLoggedIn ?
        await placeOrder(newOrder) :
        await placeOrder({...newOrder, products: orderFromStore})
        ;
        toast(`Thank you for order! You are welcome!`);


        try {
          await deleteCart();
          dispatch(initializeCart([]));
          if (!isLoggedIn){
            navigate('/')
          } else {
            navigate('/profile')
          }

        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }

  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__form}>
        <p className={styles.checkout__form_header}>Checkout</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form__details}>
            <div className={styles.form__main}>
              <div className={styles.form__field}>
                <label className={styles.form__field_label}>
                  Surname, name and patronymic
                </label>
                <input
                  defaultValue={customerName + ' ' + customerLastName}
                  className={styles.form__field_input}
                  {...register('name', {
                    required: 'This field is mandatory',
                    minLength: {
                      value: 3,
                      message: 'Minimum 3 characters',
                    },
                  })}
                />
                <div>
                  {errors?.name && (
                    <p className={styles.form__field_error}>
                      {errors?.name?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__field_label}>
                  Country, city, address
                </label>
                <input
                  className={styles.form__field_input}
                  {...register('address', {
                    required: 'This field is mandatory',
                    minLength: {
                      value: 3,
                      message: 'Minimum 3 characters',
                    },
                  })}
                />
                <div>
                  {errors?.address && (
                    <p className={styles.form__field_error}>
                      {errors?.address?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__field_label}>
                  Contact number
                </label>
                <input
                  defaultValue={telephone}
                  className={styles.form__field_input}
                  {...register('phoneNumber', {
                    required: 'This field is mandatory',
                    pattern:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  })}
                />
                <div>
                  {errors?.phoneNumber && (
                    <p className={styles.form__field_error}>
                      {errors?.phoneNumber?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.form__field}>
                <label className={styles.form__field_label}>Email</label>
                <input
                  defaultValue={customerEmail}
                  className={styles.form__field_input}
                  {...register('email', {
                    required: 'This field is mandatory',
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                <div>
                  {errors?.email && (
                    <p className={styles.form__field_error}>
                      {errors?.email?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.form__additional}>
              <div className={styles.additional__signIn}>
                <p className={styles.additional__title}>
                  Set up in a couple of minutes
                </p>
                <p className={styles.additional__signIn_text}>
                  If you are already registered on the site, then you just need
                  to enter your profile so as not to enter information again.
                </p>
                {!isLoggedIn && (
                  <NavLink
                    to="/login"
                    className={styles.additional__signIn_icon}
                  >
                    <img src={signInIcon}></img>
                    <span>Sign in</span>
                  </NavLink>
                )}
              </div>

              <div className={styles.additional__shipping}>
                <p className={styles.additional__title}>
                  Choose a shipping method
                </p>

                <div className={styles.additional__shipping_chooseBtns}>
                  <div className={styles.shipping__chooseBtn} id="FedEX">
                    <label htmlFor="FedEX" className={styles.shipping__label}>
                      <input
                        type="radio"
                        value="FedEX"
                        id="FedEX"
                        className={styles.shipping__input}
                        {...register('shipping', {
                          required: 'This field is mandatory',
                        })}
                      />
                      FedEX
                      <IoIosArrowRoundDown />
                    </label>
                  </div>
                  <div className={styles.shipping__chooseBtn} id="Door">
                    <label htmlFor="Door" className={styles.shipping__label}>
                      <input
                        type="radio"
                        value="Door"
                        id="Door"
                        className={styles.shipping__input}
                        {...register('shipping', {
                          required: 'This field is mandatory',
                        })}
                      />
                      To door
                      <IoIosArrowRoundDown />
                    </label>
                  </div>
                  {errors?.shipping && (
                    <p className={styles.form__field_error}>
                      {errors?.shipping?.message || 'Error!'}
                    </p>
                  )}
                </div>

                <p className={styles.additional__shipping_costCalc}>
                  Shipping cost is calculated individually by the manager
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={styles.form__confirmBtn}
            style={{ backgroundColor: 'rgba(238, 228, 218, 1)' }}
          >
            <span className={styles.form__confirmBtn_text}>
              Send your order
            </span>
            <IoIosArrowRoundForward />
          </button>
        </form>
      </div>

      <div className={styles.checkout__order}>
        <OrderDetails />

        <NavLink to="/shop" className={styles.checkout__editBtn}>
          <LuEdit2 />
          <span>Edit this order</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Checkout;
