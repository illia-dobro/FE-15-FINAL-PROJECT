export const findMinAndMax = (array) =>
  array.reduce(
    (accum, product) => {
      if (product.currentPrice < accum.min) accum.min = product.currentPrice;
      if (product.currentPrice > accum.max) accum.max = product.currentPrice;
      return accum;
    },
    {
      min: Infinity,
      max: -Infinity,
    }
  );
