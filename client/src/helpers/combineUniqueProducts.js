export const combineUniqueProducts = (...arrays) => {
  const filteredArrays = arrays.filter(
    (arr) => arr !== null && arr !== undefined
  );
  const mergedArray = filteredArrays.flat();

  return mergedArray.filter(
    (item, index, self) =>
      self.findIndex((otherItem) => otherItem._id === item._id) === index
  );
};
