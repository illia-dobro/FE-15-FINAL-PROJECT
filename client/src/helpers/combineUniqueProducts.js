export const combineUniqueProducts = (...arrays) => {
  const filteredArrays = arrays.filter(
    (arr) => arr !== null && arr !== undefined
  );
  const mergedArray = filteredArrays.flat();

  return mergedArray.reduce((result, currentItem) => {
    const existingItemIndex = result.findIndex(
      (item) => item.product && item.product._id === currentItem.product._id
    );

    if (existingItemIndex !== -1) {
      result[existingItemIndex] = {
        ...result[existingItemIndex],
        cartQuantity: result[existingItemIndex].cartQuantity + 1
      };
    } else {
      result.push(currentItem);
    }

    return result;
  }, []);
};
