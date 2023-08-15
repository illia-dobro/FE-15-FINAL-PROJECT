import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPriceRange } from "../../app/slices/filtersSlice.js";

const PriceRange = () => {
  const defaultRange = useSelector((state) => state.filters.priceRange);

  const [priceRange, setPriceRange] = useState([
    defaultRange.min,
    defaultRange.max,
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    const updatePriceFilter = () => {
      dispatch(
        setCurrentPriceRange({
          currentMin: priceRange[0],
          currentMax: priceRange[1],
        })
      );
    };

    updatePriceFilter();
  }, [dispatch, priceRange]);

  const handleMinChange = (event) => {
    const newMinValue = +event.target.value;
    setPriceRange((prevPriceRange) => {
      if (
        newMinValue < defaultRange.min ||
        newMinValue > prevPriceRange[1] ||
        newMinValue === prevPriceRange[1]
      )
        return prevPriceRange;

      return [newMinValue, prevPriceRange[1]];
    });
  };

  const handleMaxChange = (event) => {
    const newMaxValue = +event.target.value;
    setPriceRange((prevPriceRange) => {
      if (
        newMaxValue > defaultRange.max ||
        newMaxValue < prevPriceRange[0] ||
        newMaxValue === prevPriceRange[0]
      )
        return prevPriceRange;
      return [prevPriceRange[0], newMaxValue];
    });
  };

  return (
    <div>
      <Slider
        range
        allowCross={false}
        min={defaultRange.min}
        max={defaultRange.max}
        value={priceRange}
        onChange={(value) => {
          setPriceRange(value);
        }}
      />

      <label>
        Min Price
        <input type="number" value={priceRange[0]} onChange={handleMinChange} />
      </label>

      <label>
        Max Price
        <input type="number" value={priceRange[1]} onChange={handleMaxChange} />
      </label>
    </div>
  );
};

export default PriceRange;
