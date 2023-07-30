import { IoIosArrowRoundForward } from "react-icons/io";

import styles from './RequestCallBack.module.scss';

const RequestCallBack = () => {
    return (
        <div className={styles.request__container}>
            <div>
                <img src='../../src/assets/unique_brandName.png'/>
                <p className={styles.request__title}>Request a call back</p>


                <button className={styles.request__sendBtn}>
                    <span>Request call</span>
                    <IoIosArrowRoundForward />    
                </button>
            </div>
            <img src='../../src/components/requestCallBack/contacts_request_img.png'></img>
        </div>
    )
}

export default RequestCallBack;