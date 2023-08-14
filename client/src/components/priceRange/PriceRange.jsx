import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange = ({ min = 0, max = 100, defaultValue = [10, 80] }) => {
  const [minPrice, setMinPrice] = useState(45);
  const [maxPrice, setMaxPrice] = useState(55);

  return (
    <div>
      <Slider
        range
        allowCross={false}
        min={min}
        max={max}
        defaultValue={defaultValue}
        value={[minPrice, maxPrice]}
        onChange={(value) => {
          setMinPrice(value[0]);
          setMaxPrice(value[1]);
          console.log(minPrice, maxPrice);
        }}
      />
      <input type="number" value={minPrice} />
      <input type="number" value={maxPrice} />
    </div>
  );
};

export default PriceRange;
