import { useState } from "react";
import { useRouter } from "next/router";
const Products = ({ addToCart }) => {
  const router = useRouter();
  const { products } = router.query;
  const [pincode, setpincode] = useState();
  const [availability, setavailability] = useState();
  const checkAvailable = async () => {
    const pins = await fetch("http://localhost:3000/api/pincode/");
    const pinNow = await pins.json();
    const pinJson = JSON.stringify(pinNow);
    if (pinJson.includes(pincode)) {
      setavailability(true);
    } else {
      setavailability(false);
    }
  };
  const Setpincode = (event) => {
    setpincode(parseInt(event.target.value));
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-1 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto  flex md:flex-row flex-col">
            <img
              alt="ecommerce"
              className="lg:w-1/3  lg:h-auto  mx-0  object-cover object-top rounded shadow-xl shadow-green-400"
              src="https://m.media-amazon.com/images/I/41Stn54qQNL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <div className="lg:w-1/2  w-full  px-10 lg:pl-10 lg:py-6 mt-6 lg:mt-0 shadow-xl shadow-green-400">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <div className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </div>
                  <div className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </div>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 ">
                <span className="title-font font-medium md:text-2xl text-xl text-green-300">
                  58 &#8377;
                </span>
                <button className="flex md:ml-4 ml-2 text-white bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded">
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(products, 1, 56, "Apple", 30, "large");
                  }} //cartId, qty, price, name, size, varient
                  className="flex md:ml-4 ml-2 text-white bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full md:w-10 md:h-10 w-8 h-8 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    Check
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="Check-PinCode flex flex-row my-4 space-x-1">
                <input
                  onChange={Setpincode}
                  type="text"
                  placeholder="Enter your Pincode"
                  className="form-control relative flex-auto min-w-0 block w-[fit-content] px-3 py-1.5 text-base font-mono text-green-400 bg-black bg-clip-padding border border-solid border-green-400 rounded-xl transition ease-in-out m-0 focus:text-black focus:bg-green-200 focus:border-green-600 focus:outline-none shadow-xl shadow-green-600"
                />
                <button
                  onClick={checkAvailable}
                  className="flex ml-10 text-white  bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                >
                  Check
                </button>
              </div>
              {!availability && availability != null && (
                <div className="Show-Availability mt-4 text-red-500">
                  Sorry !! Not Available at this pincode Yet!!{" "}
                </div>
              )}
              {availability && availability != null && (
                <div className="Show-Availability mt-4 text-green-500">
                  Delivery is Available !!!{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
