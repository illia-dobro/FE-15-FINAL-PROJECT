import { useState } from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import Modal from '../../../components/Modal';
import EditProfile from '../EditProfile/EditProfile';
import { BsArrowRight, BsFillPencilFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import ChangePassword from '../ChangePassword';

function UserData({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPassword, setIsModalPassword] = useState(false);

  const dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem('tokenDanIT');
    dispatch(logout());
    window.location.reload();
  }

  function handleEdit() {
    setIsModalOpen((prev) => !prev);
  }

  function handleChangePassword(){
    setIsModalPassword(true);
  }

  return (
    <>
      {isModalOpen && (
        <Modal setOpen={setIsModalOpen} openModal={isModalOpen}>
          <EditProfile data={user} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
      {isModalOpenPassword && (
        <Modal setOpen={setIsModalPassword} openModal={isModalOpenPassword}>
          <ChangePassword setIsModalOpen={setIsModalPassword} />
        </Modal>
      )}
      <div className="flex-1 bg-[#EEE4DA] px-10 xl:px-16 py-16 sm:py-24 flex flex-col items-center justify-center text-slate-700">
        <h3 className="text-3xl  pb-8">Profile</h3>
        <p className="pt-8 text-2xl">{user.firstName + ' ' + user.lastName}</p>
        <p className="pb-2 text-sm">{user.email}</p>
        <div className="pb-12 flex gap-2 items-center">
          <p className="text-sm">{user.telephone}</p>
          <button onClick={handleChangePassword}>
            <BsFillPencilFill className="cursor-pointer hover:text-[#705f2e] -mt-[2px]" />
            <span className="sr-only">Edit password</span>
          </button>
        </div>
        <button
          onClick={handleEdit}
          className="w-[200px] xl:w-[318px] lg:w-[280px] mb-8 text-xl flex gap-2 items-center justify-center bg-[#f4eae0] py-2 lg:py-4 xl:py-7 rounded-[66px] hover:bg-[#f5eee7] transition-all"
        >
          <span>Edit your profile</span>
          <BsArrowRight size={14} />
        </button>

        <button
          className="text-sm flex gap-3 items-center transition-all hover:text-slate-500"
          onClick={handleLogout}
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </>
  );
}

export default UserData;

UserData.propTypes = {
  user: PropTypes.object.isRequired,
};
