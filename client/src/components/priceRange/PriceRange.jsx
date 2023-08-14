import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange = ({ min = 0, max = 100, defaultValue = [10, 80] }) => {
  const [priceRange, setPriceRange] = useState(defaultValue);

  const handleMinChange = (event) => {
    const newMinValue = +event.target.value;
    setPriceRange((prevPriceRange) => {
      if (
        newMinValue < min ||
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
        newMaxValue > max ||
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
        min={min}
        max={max}
        value={priceRange}
        onChange={(value) => {
          setPriceRange(value);
          console.log(priceRange);
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
