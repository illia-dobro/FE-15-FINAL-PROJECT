import { useSearchProductMutation } from "../../app/services/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../app/slices/searchSlice.js";
import ProductsList from "../../layouts/productsList/ProductsList.jsx";
import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard.jsx";
import HeartsLoader from "../heartsLoader/heartsLoader.jsx";
import { NavLink } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const [
    search,
    {
      data: searchResults,
      isLoading: isSearchLoading,
      isSuccess: isSearchSuccess,
    },
  ] = useSearchProductMutation();

  const handleSearchInput = async (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  console.log(isSearchSuccess, searchResults);

  useEffect(() => {
    if (searchQuery.query) {
      search(searchQuery);
    }
  }, [search, searchQuery]);

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-xl">
      <div className="container mx-auto pb-4 text-black">
        <input
          id="searchfield"
          type="search"
          placeholder="Search..."
          autoFocus="autofocus"
          className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
          onChange={(e) => handleSearchInput(e)}
        />
      </div>
      <div className="flex flex-col align-middle mb-4">
        {isSearchLoading && (
          <HeartsLoader wrapperClass="flex justify-center align-middle" />
        )}
        {searchResults?.length ? (
          <>
            <ProductsList products={searchResults.slice(0, 4)} />
            <NavLink to="/catalog" className="text-center">
              {"Open full catalog"}
            </NavLink>
          </>
        ) : (
          <span className="text-center">{"No results"}</span>
        )}
      </div>
    </div>
  );
};

export default Search;