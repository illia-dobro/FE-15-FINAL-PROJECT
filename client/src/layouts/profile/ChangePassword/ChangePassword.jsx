import { useState } from 'react';
import { useUpdatePasswordMutation } from '../../../app/services/api';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

function ChangePassword({ setIsModalOpen }) {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const passwords = {
      password: oldPassword,
      newPassword: password,
    };
    try {
      const data = await updatePassword(passwords);
      if (data.error) {
        throw data;
      } else {
        toast('Congratulations, you have successfully update password!');
        setIsModalOpen(false);
      }
    } catch (err) {
      console.log(err);
      if (err.error.status === 400) {
        console.log(err.error.data);
        setError(err.error.data);
      } else {
        toast('Something goes wrong!');
      }
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Old Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EEE4DA] sm:text-sm sm:leading-6"
              />
            </div>
            <span className="text-red-500 text-sm">{error.password}</span>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New Password
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
            <span className="text-red-500 text-sm">{error.newPassword}</span>
          </div>
          <div>
            <span className="text-red-500 text-sm pb-1 block">
              {error.message}
              {error.error}
            </span>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center text-[#555555] rounded-md bg-[#EEE4DA] px-3 py-2 text-sm font-semibold shadow-sm hover:bg-[#eddac7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#eddac7] transition"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

ChangePassword.propTypes = {
  setIsModalOpen: PropTypes.func,
};
