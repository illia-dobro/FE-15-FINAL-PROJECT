export const getProductFromWishlist = (arr, id) => {
  return Boolean(arr.find((el) => el._id === id));
};
