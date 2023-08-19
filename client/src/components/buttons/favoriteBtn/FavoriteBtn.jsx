import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateWishListMutation } from '../../../app/services/api';
import Button from '../button';
import './favoriteBtn.scss';

function FavoriteBtn({id}) {
  const [inFavorites, setInFavorites] = useState(false);
  const [error, setError] = useState('');

  const [createWishList, { isLoading }] = useCreateWishListMutation();

  async function handleWishList() {
    try {
      const data = await createWishList({products:[id]});
      if (data.error) {
        throw data;
      } else {
        toast('Congratulations, you have successfully add to wish list');
      }
    } catch (err) {
      console.log(err);
      if (err.error.status === 400) {
        setError(err.error.data);
      } else {
        toast('Something goes wrong!');
      }
    }
  }

  return (
    <Button
      className="favorite-btn"
      action={handleWishList}
    >
      {inFavorites ? <VscHeartFilled /> : <VscHeart />}
      {inFavorites ? (
        <span>Remove from favorites</span>
      ) : (
        <span>Add to favorites</span>
      )}
    </Button>
  );
}

export default FavoriteBtn;
