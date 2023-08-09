import React from 'react';
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input/input'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { useRegisterMutation } from '../../../app/services/api';


function SignUp() {
  const [login, setLogin] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const [register, {isLoading}] = useRegisterMutation();

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
        telephone
      });
      console.log(data);
      if(data[error]){
        throw data
      } else {
        navigate("/");
      }

    } catch (error) {
      setError(error.error.data);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo fill={'#AC8F78'} className="mb-10 mx-auto" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#555555]">
          Registration
        </h2>
        <p className="mt-2 px-4 pt-15px text-center text-sm text-gray-600">
          If this is your first time on the site, then you should fill out a
          questionnaire so that we can keep a history of your orders
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <span className='text-red-500 text-sm'>{error.message}</span>
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
                  autoComplete="name"
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
                  name="name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
              <span className='text-red-500 text-sm'>{error.firstName}</span>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
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
                  id="telephone"
                  name="telephone"
                  country="UK"
                  value={telephone}
                  onChange={setTelephone}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>


            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center text-[#555555] rounded-md bg-[#EEE4DA] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#eddac7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#eddac7] transition"
              >
                Complete registration
              </button>
            </div>
          </form>
          <div>
            <a href="#" className="flex justify-center text-sm pt-4">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;