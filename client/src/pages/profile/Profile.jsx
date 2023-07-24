import LoginForm from "../../components/loginForm";
import {useState} from "react";
import {getToken} from "../../utils/localStorage.js";

const Profile = () => {
    const jwt = getToken()
    const [isLoggedIn, setIsLoggedIn] = useState(!!jwt);

    return isLoggedIn ? <Account/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>
}

export default Profile