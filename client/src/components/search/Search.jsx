import { useSearchProductMutation } from "../../app/services/productApi.js";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, toggleSearch } from "../../app/slices/searchSlice.js";
import ProductsList from "../../layouts/productsList/ProductsList.jsx";
import { useEffect, useRef } from "react";
import HeartsLoader from "../heartsLoader/heartsLoader.jsx";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";

const Search = () => {
  const newRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (
      newRef.current &&
      !newRef.current.contains(e.target) &&
      e.target.getAttribute("data-name") !== "search"
    ) {
      dispatch(toggleSearch());
    }
  };

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const [search, { data: searchResults, isLoading: isSearchLoading }] =
    useSearchProductMutation();

  const handleSearchInput = async (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const debouncedSearch = debounce(handleSearchInput, 500);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    if (searchQuery.query) {
      search(searchQuery);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [search, searchQuery]);

  return (
    <div
      ref={newRef}
      className="absolute right-0 sm:top-0 md:top-10 sm:w-full md:w-[70vw] xl:w-[65vw] sm:h-screen md:h-auto z-10 bg-gray-50 text-[#555555] rounded-md overflow-hidden"
    >
      <div className="container w-full mx-auto border-b-2">
        <input
          id="searchfield"
          type="search"
          placeholder="Search..."
          autoFocus="autofocus"
          className="w-full text-[#555555] transition focus:outline-none focus:border-transparent p-4 appearance-none leading-normal text-lg lg:text-xl bg-gray-50"
          onChange={debouncedSearch}
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
          <span className="mt-4 text-center">
            {searchQuery.query?.length
              ? "No results"
              : "Please, enter your request"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
