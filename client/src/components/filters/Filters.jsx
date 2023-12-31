import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveFilter,
  changeActiveSingleFilter,
  clearFilters,
  updateFiltersQuery,
} from "../../app/slices/filtersSlice.js";
import PriceRange from "../priceRange/PriceRange.jsx";
import Button from "../buttons/button/Button.jsx";
import { joinClassNames } from "../../helpers/joinClassNames.js";

const sortOptions = [
  { name: "Newest", link: "-date", current: false },
  { name: "Price: Low to High", link: "+currentPrice", current: false },
  { name: "Price: High to Low", link: "-currentPrice", current: false },
];

export default function Filters({ children }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const filters = [];
  const dispatch = useDispatch();

  const productTypes = useSelector((state) => state.filters.productTypes);
  const manufacturerCountry = useSelector(
    (state) => state.filters.manufacturerCountry
  );
  filters.push(productTypes, manufacturerCountry);

  const activeFilters = useSelector((state) => state.filters.activeFilters);

  const getCheckedStatus = (arrayFilters, section, option) => {
    return arrayFilters[section]?.includes(option) || false;
  };

  const activeSorting = useSelector(
    (state) => state.filters.activeFilters.sort
  );

  const handleCheckboxChange = (e) => {
    dispatch(
      changeActiveFilter({ name: e.target.name, value: e.target.value })
    );
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(
      changeActiveSingleFilter({
        name: "sort",
        value: e.target.href.split("/").pop(),
      })
    );
    dispatch(updateFiltersQuery());
  };

  const applyFilters = (e) => {
    e.preventDefault();
    dispatch(updateFiltersQuery());
  };

  const resetFilters = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <div>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-[#eee4da] py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    checked={getCheckedStatus(
                                      activeFilters,
                                      section.id,
                                      option.value
                                    )}
                                    onChange={(e) => handleCheckboxChange(e)}
                                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500 capitalize"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <PriceRange
                    className={"border-t border-gray-200 px-4 py-6"}
                  />
                  <div className="flex justify-between mt-4 mx-4">
                    {" "}
                    <Button
                      action={(e) => resetFilters(e)}
                      className={
                        "button text-[#ac8f78] bg-[#d6cdc4]/[0.5] py-2 px-8"
                      }
                    >
                      Reset
                    </Button>{" "}
                    <Button
                      action={(e) => applyFilters(e)}
                      className={"button bg-[#ac8f78]/[0.4] py-2 px-8"}
                    >
                      Apply
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight">Our products</h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {/*@TODO fix 'active' status*/}
                        {({ active }) => (
                          <a
                            href={option.link}
                            onClick={handleSort}
                            className={joinClassNames(
                              activeSorting === option.link
                                ? "font-semibold"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* Filters */}
            <form className="hidden lg:block">
              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}`}
                                defaultValue={option.value}
                                type="checkbox"
                                checked={getCheckedStatus(
                                  activeFilters,
                                  section.id,
                                  option.value
                                )}
                                onChange={(e) => handleCheckboxChange(e)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600 capitalize"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <PriceRange className={"mt-4 mb-4"} />
              <div className="flex justify-between pt-4 border-t">
                {" "}
                <Button
                  action={(e) => resetFilters(e)}
                  className={
                    "button text-[#ac8f78] bg-[#d6cdc4]/[0.5] py-2 px-5"
                  }
                >
                  Reset
                </Button>{" "}
                <Button
                  action={(e) => applyFilters(e)}
                  className={"button bg-[#ac8f78]/[0.4] py-2 px-5"}
                >
                  Apply
                </Button>
              </div>
            </form>

            <div className="lg:col-span-4">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
