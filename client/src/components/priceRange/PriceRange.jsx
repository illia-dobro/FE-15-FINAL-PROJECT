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
  };

  const handleMinChange = (event) => {
    const newMin = +event.target.value;
    if (newMin < min || newMin >= currentMax) return;
    dispatch(setCurrentPriceRange([newMin, currentMax]));
  };

  const handleMaxChange = (event) => {
    const newMax = +event.target.value;
    if (newMax > max || newMax <= currentMin) return;
    dispatch(setCurrentPriceRange([currentMin, newMax]));
  };

  return (
    <div>
      <p>Price</p>
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

      <div>
        <label
          htmlFor="minPrice"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          from
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            value={currentMin}
            onChange={handleMinChange}
            name="minPrice"
            id="minPrice"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="maxPrice"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          to
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            value={currentMax}
            onChange={handleMaxChange}
            name="maxPrice"
            id="maxPrice"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
