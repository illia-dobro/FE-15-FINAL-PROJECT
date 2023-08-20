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

  const [search, { data: searchResults, isLoading: isSearchLoading }] =
    useSearchProductMutation();

  const handleSearchInput = async (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleBlur = (e) => {

  };

  useEffect(() => {
    if (searchQuery.query) {
      search(searchQuery);
    }
  }, [search, searchQuery]);

  return (
    <div className="absolute right-0 top-10 w-[60vw] lg:w-[70vw] z-10 bg-gray-50 text-[#555555] shadow-xl">
      <div className="container mx-auto pb-4 text-black">
        <input
          id="searchfield"
          type="search"
          placeholder="Search..."
          autoFocus="autofocus"
          className="w-full text-[#555555] transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-lg lg:text-xl"
          onChange={(e) => handleSearchInput(e)}
        />
      </div>
      <div className="flex flex-col align-middle mb-4">
        {isSearchLoading && (
          <HeartsLoader wrapperClass="flex justify-center align-middle" />
        )}
        {searchQuery.query?.length && searchResults?.length ? (
          <>
            <ProductsList products={searchResults.slice(0, 4)} />
            {searchResults.length >= 4 && (
              <>
                <p className="text-center">
                  and {searchResults.length - 4} more...
                </p>
                <NavLink
                  to="/catalog"
                  className={
                    "mt-4 button button-color--secondary py-2 px-4 mx-6"
                  }
                >
                  {"Open full catalog"}
                </NavLink>
              </>
            )}
          </>
        ) : (
          <span className="text-center">
            {searchQuery.query?.length ? "No results" : "Enter your request"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
