import {
  ClockIcon,
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";
import { useGetWishListQuery } from "../../../app/services/api";
import ProductList from "../../productsList";

const orders = [
  {
    number: "233",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    href: "#",
    invoiceHref: "#",
    total: "$302.00",
    products: [
      {
        id: 1,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      // More products...
    ],
  },
  // More orders...
];

function HistoryOrders() {
  const { data, isError, isLoading, isSuccess } = useGetWishListQuery();

  let wishlist;

  if (isError || !data) {
    wishlist = "";
  } else if (isLoading) {
    wishlist = "is loading";
  } else if (isSuccess) {
    wishlist = <ProductList products={data.products} />;
  }

  return (
    <div className="flex-1 basis-5/6 lg:basis-3/4 rounded drop-shadow-lg">
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        <div>
          <h2 className="text-3xl tracking-tight text-gray-700">
            History of orders
          </h2>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-16">
            {orders.map((order) => (
              <div key={order.number}>
                <h3 className="sr-only">
                  Order placed on{" "}
                  <time dateTime={order.datetime}>{order.date}</time>
                </h3>

                <div className="flex gap-10 items-center">
                  <div>
                    <p className="text-xl text-zinc-600">
                      Order №{order.number}
                    </p>
                    <p className="text-sm text-zinc-500">
                      In the amount of {order.total}€
                    </p>
                  </div>
                  <p className="text-sm flex flex-shrink-0 gap-2 py-3 items-center bg-[#EEE4DA] px-4 lg:px-8 rounded-[66px]">
                    <ClockIcon className="w-[14px]" /> Order pending
                  </p>
                  <div className="hidden md:flex gap-3 ml-auto bg-[#EEE4DA] self-center p-2">
                    <ArrowSmallLeftIcon className="w-4 cursor-pointer text-[#5e4b27]" />
                    <ArrowSmallRightIcon className="w-4 cursor-pointer text-[#5e4b27]" />
                  </div>
                </div>

                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div className="-my-6 divide-y divide-gray-200">
                    {order.products.map((product) => (
                      <div key={product.id} className="flex py-6"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        {data && (
          <h2 className="text-3xl tracking-tight text-gray-700 px-4 sm:px-6 lg:px-8">
            Wish list
          </h2>
        )}

        {wishlist}
      </div>
    </div>
  );
}

export default HistoryOrders;
