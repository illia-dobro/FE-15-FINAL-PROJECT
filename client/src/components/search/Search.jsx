import { useSearchProductMutation } from "../../app/services/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../app/slices/searchSlice.js";
import ProductsList from "../../layouts/productsList/ProductsList.jsx";
import { useEffect } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const [search, { data: searchResults, isSuccess: isSearchSuccess }] =
    useSearchProductMutation();

  const handleSearchInput = async (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    if (searchQuery.query) {
      search(searchQuery);
    }
  }, [search, searchQuery]);

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-12 bg-white shadow-xl">
      <div className="container mx-auto pb-4 text-black">
        <input
          id="searchfield"
          type="search"
          placeholder="Search..."
          autoFocus="autofocus"
          className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
          onBlur={(e) => handleSearchInput(e)}
        />
      </div>
     {isSearchSuccess && <ProductsList products={searchResults}  />}
    </div>
  );
};

export default Search;
