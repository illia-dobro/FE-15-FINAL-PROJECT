import UserData from '../layouts/profile/UserData';
import HistoryOrders from '../layouts/profile/HistoryOrders/';

function ProfilePage() {
  return (
    <div className="flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-col md:flex-row">
      <HistoryOrders />
      <UserData />
    </div>
  );
}

export default ProfilePage;
