import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { toast } from 'react-toastify';

import styles from './RequestCallbackForm.module.scss';

const RequestCallbackForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const [nameEmpty, setNameEmpty] = useState(false);
    const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);

    const [nameError, setNameError] = useState("Name should not be empty");
    const [phoneNumberError, setPhoneNumberError] = useState("Phone number should not be empty");
    const [emailError, setEmailError] = useState("Email should not be empty");
    const [error, setError] = useState("");

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError || phoneNumberError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, phoneNumberError, emailError])

    const blurHandler = (e) => {
        switch (e.target.name) {
        case "name":
            setNameEmpty(true);
            break;
        case "phoneNumber":
            setPhoneNumberEmpty(true);
            break;
        case "email":
            setEmailEmpty(true);
            break;
        }
    }

    const nameHandler = (e) => {
        setError('');
        setName(e.target.value);

        if(e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Name should be more than 2 and less than 30 symbols')
            if(!e.target.value) {
                setNameError('Name should not be empty')
            }
        } else {
            setNameError('')
        }
    }

    const phoneNumberHandler = (e) => {
        setError('');
        setPhoneNumber(e.target.value);
        
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if(!regex.test(e.target.value) || e.target.value.length !== 13) {
            setPhoneNumberError('Invalid phone number. Please try again.');
            if(!e.target.value) {
                setPhoneNumberError('Phone number should not be empty')
            }
        } else {
            setPhoneNumberError('')
        }
    }

    const emailHandler = (e) => {
        setError('');
        setEmail(e.target.value);

        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email')
            if(!e.target.value) {
                setEmailError('Email should not be empty')
            }
        } else {
            setEmailError('');
        }
    }

    const resetForm = () => {
        setName('');
        setPhoneNumber('');
        setEmail('');

        setNameError("Name should not be empty");
        setPhoneNumberError("Phone Number should not be empty");
        setEmailError("Email should not be empty");

        setNameEmpty(false);
        setPhoneNumberEmpty(false);
        setEmailEmpty(false);

        setError('');
    }

    const handleClick = (e) => {
        e.preventDefault();
        
        if(formValid) {
            const data = {name, phoneNumber, email};
            console.log(data);
            toast("Your request was sent successfully");
            setTimeout(() => resetForm(), 2000)
        } else {
            setError('Please fill in all the fields')
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.form__field}>
                <label className={styles.form__field_label}>Surname, name and patronymic</label>
                <input value={name} name="name" type="text" className={styles.form__field_input} onBlur={e=>blurHandler(e)} onChange={(e)=>nameHandler(e)} ></input>
                {(nameEmpty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
            </div>

            <div className={styles.form__field}>
                <label className={styles.form__field_label}>Contact number</label>
                <input value={phoneNumber} name="phoneNumber" type="text" className={styles.form__field_input} onBlur={e=>blurHandler(e)} onChange={(e)=>phoneNumberHandler(e)} ></input>
                {(phoneNumberEmpty && phoneNumberError) && <div style={{color: 'red'}}>{phoneNumberError}</div>}
            </div>

            <div className={styles.form__field}>
                <label className={styles.form__field_label}>Email</label>
                <input value={email} name="email" type="email" className={styles.form__field_input} onBlur={e=>blurHandler(e)} onChange={(e)=>emailHandler(e)} ></input>
                {(emailEmpty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            </div>

            {(error) && <div style={{color: 'red'}}>{error}</div>}
            <button className={styles.form__button} onClick={handleClick} >
                <span className={styles.form__button_text}>Request call</span>
                <IoIosArrowRoundForward />
            </button>

        </form>
    )
};

export default RequestCallbackForm;