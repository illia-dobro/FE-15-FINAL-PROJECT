import LoginForm from "../../components/loginForm";

const isLoggedIn = false;

const Profile = () => {
    return isLoggedIn ? <Account/> : <LoginForm/>
}

export default Profile