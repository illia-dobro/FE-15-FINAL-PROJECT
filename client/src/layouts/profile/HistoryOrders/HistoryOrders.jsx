import { ClockIcon } from "@heroicons/react/24/outline";
import {
  useGetWishListQuery,
  useGetOrdersQuery,
  useDeleteOrderMutation,
} from "../../../app/services/api";
import ProductCard from "../../../components/productCard";
import ProductsList from "../../productsList";
import { formatCurrency } from "../../../helpers/currencyFormatter.js";

function HistoryOrders() {
  const { data, isError, isLoading, isSuccess } = useGetWishListQuery();
  const [deleteOrder] = useDeleteOrderMutation();

  const {
    data: orders,
    isError: isOrderError,
    isLoading: isOrderLoading,
    isSuccess: isOrderSuccess,
  } = useGetOrdersQuery();

  let wishlist;
  let customerOrders;

  if (isOrderError || !orders || orders.length <= 0) {
    customerOrders = "";
  } else if (isOrderLoading) {
    customerOrders = "is loading";
  } else if (isOrderSuccess) {
    console.log(orders);
    customerOrders = orders
  }

  console.log(customerOrders);

  customerOrders = customerOrders && orders.sort((a, b) => Number(b.orderNo) - Number(a.orderNo));

  if (isError || !data) {
    wishlist = "";
  } else if (isLoading) {
    wishlist = "is loading";
  } else if (isSuccess) {
    wishlist = <ProductsList products={data.products} />;
  }

  const handleDeleteOrder = async (id) => {
    try {
      const response = await deleteOrder(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await deleteOrder(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };



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
            {customerOrders &&
              customerOrders.map((order) => (
                <div key={order.orderNo}>
                  <h3 className="sr-only">
                    Order placed on{" "}
                    <time dateTime={order.datetime}>{order.date}</time>
                  </h3>

                  <div className="flex gap-10 items-center">
                    <div>
                      <p className="text-xl text-zinc-600">
                        Order №{order.orderNo}
                      </p>
                      <p className="text-sm text-zinc-500">
                        In the amount of currency{" "}
                        {formatCurrency(order.totalSum)}
                      </p>
                    </div>
                    <p className="text-sm flex flex-shrink-0 gap-2 py-3 items-center bg-[#EEE4DA] px-4 lg:px-8 rounded-[66px]">
                      <ClockIcon className="w-[14px]" /> {order.status}
                    </p>

                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="text-sm flex py-3 items-center bg-[#EEE4DA] px-4 lg:px-8 rounded-[66px] hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                  {/*@TODO after merging fix for ProductsList cols props, need to add cols props to this element*/}
                  <ProductsList
                    products={order.products.map((item) => {
                      return {
                        ...item.product,
                        cartQuantity: item.cartQuantity,
                      };
                    })}
                  />
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
