import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserQuery } from '../../../app/services/api';
import { logout } from '../../../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { FaCircleUser } from 'react-icons/fa6';
import { BsArrowRight } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

function UserData() {
  const { data, isError, isSuccess } = useGetUserQuery();
  console.log(useGetUserQuery());

  const dispatch = useDispatch();
  const navigate = useNavigate()

  if (isError) {
    return <Navigate to="/login" replace={true} />;
  }

  function handleLogout(){
    localStorage.removeItem('tokenDanIT');
    dispatch(logout());
    window.location.reload();
  }

  if (isSuccess) {
    return (
      <div className="flex-1 bg-[#EEE4DA] px-10 xl:px-16 py-36 flex flex-col items-center justify-center text-slate-700">
        <h3 className="text-3xl  pb-8">Profile</h3>
        <div className="max-w-[226px]">
          {data.avatarUrl ? (
            <img src={data.avatarUrl} alt="user photo" />
          ) : (
            <FaCircleUser size={'auto'} color="grey" />
          )}
        </div>
        <p className="pt-8 text-2xl">{data.firstName + ' ' + data.lastName}</p>
        <p className="pb-12 text-sm">{data.email}</p>
        <button className="w-[200px] xl:w-[318px] lg:w-[280px] mb-8 text-xl flex gap-2 items-center justify-center bg-[#f4eae0] py-2 lg:py-4 xl:py-7 rounded-[66px] hover:bg-[#f5eee7] transition-all">
          <span>Edit your profile</span>
          <BsArrowRight size={14} />
        </button>

        <button className="text-sm flex gap-3 items-center transition-all hover:text-slate-500" onClick={handleLogout}>
          <FiLogOut />Logout
        </button>
      </div>
    );
  }
}

export default UserData;
