import Link from "next/link";
import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
const Checkout = ({ addToCart, removeFromCart, clearCart, subTotal, cart }) => {
  return (
    <div className="container md:m-auto mx-1 text-green-300">
      <h1 className="font-bold lg:text-3xl md:text-2xl text-xl my-8 text-center">
        Checkout
      </h1>
      <h2 className="text-center my-2 font-semibold text-xl">
        1. Delivery Details
      </h2>
      <div className="mx-auto flex my-4">
        <div className="w-1/2 px-3">
          <label
            htmlFor="name"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <div className="w-1/2 px-3">
          <label
            htmlFor="email"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div className="ml-3 mr-2">
        <label
          htmlFor="address"
          className="ml-4 leading-7 text-2xl text-green-300"
        >
          Address
        </label>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="2"
          className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 tex-base outline-none text-gray-700 px-3 py-1 leading-8 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="mx-auto flex my-4">
        <div className="w-1/2 px-3">
          <label
            htmlFor="name"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <div className="w-1/2 px-3">
          <label
            htmlFor="city"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            city
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="w-1/2 px-3">
          <label
            htmlFor="state"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <div className="w-1/2 px-3">
          <label
            htmlFor="pincode"
            className="leading-7 text-2xl text-green-300 mx-2  "
          >
            pincode
          </label>
          <input
            type="pincode"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <h2 className="text-center my-3 text-xl font-semibold">
        2. Review Cart Items & Pay
      </h2>
      <div className="CartBar flex rounded-xl flex-col md:mx-0 mx-4 bg-green-300 px-6 py-5 cursor-pointer  ">
        <ol className="list-decimal ml-10 font-semibold p-3 text-pink-400">
          {Object.keys(cart).length == 0 && (
            <div className="text-pink-400 font-[600] m-3">Cart is Empty</div>
          )}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className="items flex  text-pink-400">
                <div className=" w-[45%] ">{cart[k].name}</div>
                <AiOutlinePlusCircle
                  onClick={() => {
                    addToCart(
                      k,
                      cart[k].qty,
                      cart[k].price,
                      cart[k].size,
                      cart[k].varient
                    ); //cartId, qty, price, name, size, varient
                  }}
                  className="text-xl text-pink-400 "
                />
                <div className="w-[20%] flex items-center justify-center font-semibold text-pink-400">
                  {cart[k].qty}
                </div>
                <AiOutlineMinusCircle
                  onClick={() => {
                    removeFromCart(
                      k,
                      cart[k].qty,
                      cart[k].price,
                      cart[k].size,
                      cart[k].varient
                    );
                  }}
                  className="text-xl text-pink-400 "
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-row px-1 ">
          {subTotal != 0 && (
            <div className="Total font-semibold text-pink-400 border-solid border-y-4 border-blue-500  mx-9">
              Total = &#8377;{subTotal}
            </div>
          )}
        </div>
      </div>
      {subTotal != 0 && (
        <Link href={"/payment"}>
          <button className="flex mx-5 my-3 text-white bg-indigo-500 border-0  focus:outline-none hover:bg-blue-600 rounded text-sm">
            <div className="checkout text-pink-400 flex flex-row  mx-5 my-2">
              <MdOutlinePayment className=" text-sm mt-1 mr-1" />
              <div className=" text-sm font-semibold">
                Pay &#8377;{subTotal}
              </div>
            </div>
          </button>
        </Link>
      )}
    </div>
  );
};
export default Checkout;
