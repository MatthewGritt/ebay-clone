import React from "react";
import "./Basket.css";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";
import Total from "./Total";

function Basket() {
  const [{ basket }] = useStateValue();
  return (
    <div className="basket">
      <h2>Shopping basket ({basket?.length} items)</h2>
      {basket?.length > 0 ? (
        <div className="basket__inner">
          <div className="basket__left">
            {basket.map((item) => (
              <BasketItem
                image={item.image}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>

          <div className="basket__right">
            <Total />
          </div>
        </div>
      ) : (
        <div className="basket__noItems">
          <h2>You don't have any items in your basket.</h2>
        </div>
      )}
    </div>
  );
}

export default Basket;
