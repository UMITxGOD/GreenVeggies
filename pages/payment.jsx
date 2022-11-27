import React from "react";
const Payment = ({ subTotal }) => {
  return (
    <div>
      <div className="text-green-400">
        Pay &#8377;
        {subTotal}{" "}
      </div>
    </div>
  );
};
export default Payment;
