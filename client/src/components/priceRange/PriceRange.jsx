import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPriceRange } from "../../app/slices/filtersSlice.js";

const PriceRange = () => {
  const { min, currentMin, currentMax, max } = useSelector(
    (state) => state.filters.priceRange
  );

  const dispatch = useDispatch();

  const handleRangeChange = (value) => {
    dispatch(setCurrentPriceRange(value));
    console.log("range changed");
  };

  const handleMinChange = (event) => {
    const newMin = +event.target.value;
    console.log("newMin changed:", [newMin, currentMax]);
    if (newMin < min || newMin >= currentMax) return; // Змінено умову

    dispatch(setCurrentPriceRange([newMin, currentMax]));
    console.log("newMin changed disp");
  };

  const handleMaxChange = (event) => {
    const newMax = +event.target.value;
    console.log("newMax changed:", [currentMin, newMax]);
    if (newMax > max || newMax <= currentMin) return; // Змінено умову

    dispatch(setCurrentPriceRange([currentMin, newMax]));
    console.log("newMax changed disp");
  };

  return (
    <div>
      <Slider
        range
        allowCross={false}
        min={min}
        max={max}
        value={[currentMin, currentMax]}
        onChange={(value) => {
          handleRangeChange(value);
        }}
      />

      <label>
        Min Price
        <input type="number" value={currentMin} onChange={handleMinChange} />
      </label>

      <label>
        Max Price
        <input type="number" value={currentMax} onChange={handleMaxChange} />
      </label>
    </div>
  );
};

export default PriceRange;
