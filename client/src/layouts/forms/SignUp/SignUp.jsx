import React from 'react';
import { useNavigate,  Link, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../app/slices/authSlice';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRegisterMutation, useGetUserQuery } from '../../../app/services/api';
import { toast } from 'react-toastify';
import { glass } from '../forms.module.scss'


function SignUp() {
  const [login, setLogin] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [register, {isLoading}] = useRegisterMutation();


  const {isSuccess} = useGetUserQuery();

  if (isSuccess) {
    return  <Navigate to="/" replace={true} />
  }

  console.log(telephone);
  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    try {
      const data = await register({
        firstName,
        lastName,
        email,
        password,
        login,
        telephone: '+' +  telephone
      });
      if(data.error){
        throw data
      } else {
        toast("Congratulations, you have successfully Sign Up! Now you can sign In");
        setTimeout(() => navigate("/login"), 0.5)

      }

    } catch (err) {
      console.log(err);
      if(err.error.status === 400) {
        setError(err.error.data);
      } else {
        toast("Something goes wrong!");
      }

    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 px-2 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#555555]">
          Sign Up
        </h2>
        <p className="mt-2 px-4 pt-15px text-center text-sm text-gray-600">
          If this is your first time on the site, then you should fill out a
          questionnaire so that we can keep a history of your orders
        </p>
      </div>

      <div className={`${glass} mt-8 sm:mx-auto sm:w-full sm:max-w-md`}>
        <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
              <label
                htmlFor="login"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Login
              </label>
              <div className="mt-2">
                <input
                  id="login"
                  name="login"
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  autoComplete="login"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.login}</span>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="firstName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.firstName}</span>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.lastName}</span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.email}</span>
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telephone
              </label>
              <div className="mt-2">
                <PhoneInput
                  inputStyle={{width:'100%'}}
                  country={'ua'}
                  id="telephone"
                  name="telephone"
                  value={telephone}
                  onChange={(phone) => setTelephone(phone)}
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500'>{error.telephone}</span>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA] sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.password}</span>
            </div>
            <div>
            <span className='text-red-500 text-sm pb-1 block'>{error.message}{error.error}</span>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center text-[#555555] rounded-md bg-[#EEE4DA] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#eddac7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#eddac7] transition"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className='flex gap-2 items-center pt-4 justify-center'>
          <span>Do you have an account?</span>
            <Link to='/login' className='font-bold text-gray-600 hover:text-gray-700'>
                Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
