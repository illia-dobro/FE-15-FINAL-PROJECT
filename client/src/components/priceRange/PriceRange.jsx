import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPriceBound } from "../../app/slices/filtersSlice.js";

const PriceRange = ({ className = "" }) => {
  const { min, max } = useSelector((state) => state.filters.priceRange);
  const { minPrice: currentMin, maxPrice: currentMax } = useSelector(
    (state) => state.filters.activeFilters
  );

  const dispatch = useDispatch();

  const handleRangeChange = (value) => {
    const [newMin, newMax] = value;
    dispatch(setCurrentPriceBound({ name: "minPrice", value: newMin }));
    dispatch(setCurrentPriceBound({ name: "maxPrice", value: newMax }));
  };
  // @TODO add keyboard input
  const handleMinChange = (event) => {
    const newMin = +event.target.value;
    // if (newMin < min || newMin >= currentMax) return;
    dispatch(setCurrentPriceBound({ name: "minPrice", value: newMin }));
  };

  const handleMaxChange = (event) => {
    const newMax = +event.target.value;
    // if (newMax > max || newMax <= currentMin) return;
    dispatch(setCurrentPriceBound({ name: "maxPrice", value: newMax }));
  };

  return (
    <div className={className}>
      <span>Price</span>
      <Slider
        range
        allowCross={false}
        min={min}
        max={max}
        value={[currentMin || min, currentMax || max]}
        onChange={(value) => {
          handleRangeChange(value);
        }}
        handleStyle={{
          borderColor: "#555555",
          backgroundColor: "#d6cdc4",
          opacity: 1,
        }}
        trackStyle={{ backgroundColor: "#555555" }}
        railStyle={{
          backgroundColor: "lightgray",
        }}
        className="my-4"
      />

      <div className="flex justify-between">
        <div>
          <div className="relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={currentMin || min || ""}
              min={min}
              max={max}
              onChange={handleMinChange}
              name="minPrice"
              id="minPrice"
              className="block w-14 text-right rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-[#ac8f78]-500/[.55] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={currentMax || max || ""}
              onChange={handleMaxChange}
              min={min}
              max={max}
              name="maxPrice"
              id="maxPrice"
              className="block w-14 text-right rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-[#ac8f78]-500/[.55] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
