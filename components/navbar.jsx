import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { MdAccountCircle } from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { BsFillBagCheckFill, BsFillCartXFill } from "react-icons/bs";
const Navbar = ({ addToCart, removeFromCart, clearCart, subTotal, cart }) => {
  const numItem = useRef();
  const ref = useRef();
  const ToggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
      ref.current.classList.remove("bg-green-900");
      ref.current.classList.add("bg-green-300");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("bg-green-300");
      ref.current.classList.add("'bg-green-900");
    }
  };
  return (
    <div className="flex flex-col md:w-auto sticky z-20 shadow-md shadow-green-300 bg-black  top-0 md:flex-row md:justify-start justify-center items-center py-2 bg-opacity">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            src="/logo_new.ico"
            height={50}
            width={50}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <ul className="nav flex items-center space-x-2 font-bold  md:text-md text-green-300">
        <Link href={"/fruits"}>
          <div href="">
            <li className="shadow-xl shadow-green-600">Fruits</li>
          </div>
        </Link>
        <Link href={"/vegetables"}>
          <div href="">
            <li className="shadow-xl shadow-green-600">Vegetable</li>
          </div>
        </Link>
        <Link href={"/drinks"}>
          <div href="">
            <li className="shadow-xl shadow-green-600">Energy Drinks</li>
          </div>
        </Link>
        <Link href={"/oils"}>
          <div href="">
            <li className="shadow-xl shadow-green-600">Oils</li>
          </div>
        </Link>
      </ul>

      <div className="cart absolute right-0 top-2 mx-5 my-3 flex">
        <Link href="/login">
          <MdAccountCircle className="text-2xl md:text-4xl cursor-pointer mx-5 text-green-400 shadow-xl shadow-green-600 " />
        </Link>
        <AiOutlineShoppingCart
          onClick={ToggleCart}
          className="text-2xl md:text-4xl cursor-pointer mx-5 text-green-400 shadow-xl shadow-green-600 "
        />
      </div>
      <div
        ref={ref}
        className={`CartBar w-72 h-[100vh] absolute flex flex-col top-0 right-0  bg-green-300 px-6 py-5 cursor-pointer transform transition-transform ${
          Object.keys(cart).length != 0 ? `translate-x-0` : `translate-x-full`
        }`}
      >
        <span className="absolute right-3 top-3  text-red-500 ">
          <CgCloseO onClick={ToggleCart} className="text-2xl " />
        </span>
        <span className="font-bold flex items-center justify-center text-xl text-pink-400">
          CheckOut
        </span>
        <ol className="list-decimal font-semibold p-3 text-pink-400">
          {Object.keys(cart).length == 0 && (
            <div className="text-pink-400 font-[600] m-3">Cart is Empty</div>
          )}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className="items flex text-pink-400">
                <div className=" w-3/4">{cart[k].name}</div>
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
                  className="text-xl text-pink-400"
                />
                <div
                  ref={numItem}
                  className="w-1/4 flex items-center justify-center font-semibold text-pink-400"
                >
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
                  className="text-xl text-pink-400"
                />
              </div>
            </li>
          ))}
        </ol>
        <div className="total font-bold  text-pink-400  mb-3">
          {" "}
          Total = &#8377;{subTotal}
        </div>
        <div className="flex flex-row px-1 ">
          <Link href={"/checkout"}>
            <button className="flex mx-auto text-white bg-indigo-500 border-0  focus:outline-none hover:bg-blue-600 rounded text-sm">
              <div className="checkout text-pink-400 flex flex-row  mx-5 my-2">
                <BsFillBagCheckFill className=" text-sm" />
                <div className=" text-sm font-semibold">checkout</div>
              </div>
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-auto text-white bg-indigo-500 border-0  focus:outline-none hover:bg-blue-600 rounded text-sm"
          >
            <div className="checkout text-pink-400 flex flex-row  mx-5 my-2">
              <BsFillCartXFill className=" text-sm" />
              <div className=" text-sm font-semibold">Clear</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
