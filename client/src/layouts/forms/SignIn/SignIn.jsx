import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { useLoginMutation } from '../../../app/services/api';
import { saveState } from '../../../helpers/localStorage';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [error, setError] = React.useState('');
  const [login, {isLoading}] = useLoginMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await login({
        loginOrEmail: email,
        password,
      });
      console.log(data);
      if (data.error) {
        throw data;
      } else {
        toast('Congratulations, you have successfully sign in!');
        saveState(data.data.token)
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      if (err.error.status === 404 || err.error.status === 400) {
        setError(err.error.data);
      } else {
        toast('Something goes wrong!');
      }
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo fill={'#AC8F78'} className="mb-10 mx-auto" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#555555]">
          Authorization
        </h2>
        <p className="mt-2 px-4 pt-15px text-center text-sm text-gray-600">
          Please enter your username and password from your account to log in,
          or register
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <span className="text-red-500 text-sm">
              {error.loginOrEmail}
            </span>
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
              <span className="text-red-500 text-sm">{error.email}</span>
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
              <span className="text-red-500 text-sm">{error.password}</span>
            </div>

            <div>
              <button
                type="submit"
                // disabled={isLoading}
                className="flex w-full justify-center text-[#555555] rounded-md bg-[#EEE4DA] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#eddac7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#eddac7] transition"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className='flex gap-2 items-center pt-4 justify-center'>
            <span>Don`t have an account?</span>
            <Link to='/sign-up' className='font-bold text-gray-600 hover:text-gray-700'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
