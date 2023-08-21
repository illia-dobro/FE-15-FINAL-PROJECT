import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  useCreateWishListMutation,
  useGetWishListQuery,
  useAddWishListMutation,
  useDeleteProductWishListMutation,
} from '../../../app/services/api';
import Button from '../button';
import './favoriteBtn.scss';
import { getProductFromWishlist } from '../../../helpers/getProductFromWishlist';

function FavoriteBtn({ id }) {
  const { data: wishlist, isSuccess: isSuccessGetWishlist } =
    useGetWishListQuery();
  const [createWishList ] = useCreateWishListMutation();
  const [addWishList] = useAddWishListMutation();
  const [deleteProductWishList] = useDeleteProductWishListMutation();

  const isInWishlist =
    isSuccessGetWishlist && wishlist
      ? getProductFromWishlist(wishlist.products, id)
      : null;

  async function handleDelete() {
    try {
      const data = await deleteProductWishList(id);
      if (data.error) {
        throw data;
      }
    } catch (err) {
      toast('Something goes wrong!');
    }
  }

  async function handleWishList() {
    try {
      const data = !(isSuccessGetWishlist && wishlist)
        ? await createWishList({ products: [id] })
        : await addWishList(id);
      if (data.error) {
        throw data;
      }
    } catch (err) {
      toast('Something goes wrong!');
    }
  }

  return (
    <Button
      className="favorite-btn"
      action={!isInWishlist ? handleWishList : handleDelete}
    >
      {isInWishlist ? <VscHeartFilled size={16} color='#cf6d23' /> : <VscHeart />}
      {isInWishlist ? (
        <span>Remove from favorites</span>
      ) : (
        <span>Add to favorites</span>
      )}
    </Button>
  );
}

export default FavoriteBtn;


FavoriteBtn.propTypes = {
  id: PropTypes.string
};
