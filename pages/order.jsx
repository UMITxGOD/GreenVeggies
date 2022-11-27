import React from "react";
const Order = ({ cart, subTotal }) => {
  return (
    <div>
      <section className="text-green-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-green-500 tracking-widest">
                GreenVegies
              </h2>
              <h1 className="text-green-900 text-3xl title-font font-medium mb-4">
                OrderID : #ff1892921
              </h1>
              <p className="leading-relaxed mb-4">
                Your Order Has been Successfully Placed !!
              </p>
              <div className="Orders flex justify-between ">
                <div className="ItemDescription">Item Description</div>
                <div className="ItemQty">Quantity</div>
                <div className="Itemprice">Price</div>
              </div>
              {Object.keys(cart).length != 0 &&
                Object.keys(cart).map((k) => (
                  <div
                    key={k}
                    className="flex justify-between border-t border-blue-500 py-2"
                  >
                    <span className="text-green-500">{cart[k].name}</span>
                    <span className=" text-green-500 ml-10">{cart[k].qty}</span>
                    <span className="text-green-500">
                      &#8377;{cart[k].price}
                    </span>
                  </div>
                ))}

              <span className="title-font font-medium text-2xl text-green-900">
                SubTotal = &#8377;{subTotal}
              </span>
              <button className="flex my-6 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Track Order
              </button>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Order;
