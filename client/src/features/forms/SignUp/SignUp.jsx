import React from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { useRegisterMutation, useProductsQuery } from '../../../app/services/api';


function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [telephone, setTelephone] = React.useState('');

  const [register] = useRegisterMutation();

  const {data, error, isLoading, isSuccess} = useProductsQuery();

  if (isLoading){
    console.log("loading");
  } else if(isSuccess){
    console.log(data);
  } else if(error){
    console.log('errorrr');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register({
        firstName: name,
        lastName: 'sdsds',
        email,
        password,
        login: name,
        telephone,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
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
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telephone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  // pattern="(\+?380)?\s?(\d{2})?\s?\d{3}\s?\d{2}\s?\d{2}"
                  title="Format: +38 XXX XXX XX XX"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA]  sm:text-sm sm:leading-6"
                />
              </div>
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

              {/* <div className="text-sm">
                  <a href="#" className="font-medium text-[#555555]  hover:text-[#2f2e2d]">
                    Forgot your password?
                  </a>
                </div> */}
            </div>

            <div>
              <button
                type="submit"
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
