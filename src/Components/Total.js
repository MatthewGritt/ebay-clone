import React from "react";
import { useStateValue } from "../StateProvider";
import "./Total.css";

function Total() {
  const [{ basket }] = useStateValue();
  const amount = basket?.reduce((acc, cur) => cur.price + acc, 0).toFixed(2);
  console.log(amount);
  return (
    <div className="total">
      <div className="total__buttons">
        <button className="buttonOne">Go to checkout</button>
        <button className="buttonTwo">Continue shopping</button>
      </div>
      <div className="total__info">
        <div className="total__infoLeft">
          <p>items ({basket?.length})</p>
          <p>Postage</p>
        </div>
        <div className="total__infoRight">
          <p>£{amount}</p>
          <p>Free</p>
        </div>
      </div>
      <div className="total__price">
        <div className="total__priceLeft">
          <p>Total</p>
        </div>
        <div className="total__priceRight">
          <p>£{amount}</p>
        </div>
      </div>
    </div>
  );
}

export default Total;
