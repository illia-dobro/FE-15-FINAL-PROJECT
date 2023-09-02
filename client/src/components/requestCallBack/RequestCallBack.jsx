import RequestCallbackForm from "../forms/requestCallForm";

import styles from './RequestCallBack.module.scss';

const RequestCallBack = () => {

    return (
        <div className={styles.request__container}>

            <div className={styles.request__form}>
                <img src='../../src/assets/unique_brandName.png'/>
                <p className={styles.request__title}>Request a call back</p>

                <RequestCallbackForm />
            </div>

            <img src='../../src/components/requestCallBack/contacts_request_img.png' className={styles.request__image}></img>
        </div>
    )
}

export default RequestCallBack;
