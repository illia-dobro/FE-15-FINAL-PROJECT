import { Navigate } from 'react-router-dom';
import ProfileLoader from '../helpers/loaders/profileLoader'
import { useGetUserQuery } from '../app/services/api';

import UserData from '../layouts/profile/UserData';
import HistoryOrders from '../layouts/profile/HistoryOrders/';

function ProfilePage() {

  const { data: user, isError, isSuccess, isLoading } = useGetUserQuery();

  if (isError) {
    return <Navigate to="/login" replace={true} />;
  } else if(isLoading ){
    return <div className='flex justify-center items-center mb-10'> <ProfileLoader /></div>
  } else if (isSuccess){
    return (
      <div className="flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-col md:flex-row">
        <HistoryOrders user = {user}/>
        <UserData user = {user}/>
      </div>
    );
  }


}

export default ProfilePage;
