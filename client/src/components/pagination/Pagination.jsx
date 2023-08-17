import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { changePage, setStartPage } from "../../app/slices/filtersSlice.js";

const Pagination = () => {
  const dispatch = useDispatch();

  const { pagesQty, productsQty, perPage, startPage } = useSelector(
    (state) => state.filters.pagination
  );

  const pagesNums = Array.from(
    { length: pagesQty },
    (value, index) => index + 1
  );

  const fromValue = (startPage - 1) * perPage + 1;
  const toValue = startPage === pagesQty ? productsQty : startPage * perPage;

  const handlePreviousPage = (e) => {
    e.preventDefault();
    if (startPage > 1) dispatch(changePage(-1));
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (startPage < pagesQty) dispatch(changePage(1));
  };

  const handleSelectPage = (e) => {
    e.preventDefault();
    dispatch(setStartPage(+e.target.href.split("/").pop()));
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#d6cdc4]"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#d6cdc4]"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{fromValue}</span> to{" "}
            <span className="font-medium">{toValue}</span> of{" "}
            <span className="font-medium">{productsQty}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={(e) => handlePreviousPage(e)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#d6cdc4] focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {pagesNums.map((pageNum) => (
              <a
                key={pageNum}
                href={pageNum}
                onClick={(e) => handleSelectPage(e)}
                className={
                  startPage === pageNum
                    ? "relative z-10 inline-flex items-center bg-[#555555] px-4 py-2 text-sm font-semibold text-[#F5ECE3] focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#555555] ring-1 ring-inset ring-gray-300 hover:bg-[#d6cdc4] focus:z-20 focus:outline-offset-0"
                }
              >
                {pageNum}
              </a>
            ))}

            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"*/}
            {/*>*/}
            {/*  3*/}
            {/*</a>*/}
            {/*<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">*/}
            {/*  ...*/}
            {/*</span>*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"*/}
            {/*>*/}
            {/*  8*/}
            {/*</a>*/}

            <a
              href=""
              onClick={(e) => handleNextPage(e)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-[#d6cdc4] focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
