import React from "react";
import { useStateValue } from "../StateProvider";

function ShoppingItem({ image, title, price, id }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image,
        title,
        price,
        id,
      },
    });
  };

  return (
    <div className="shoppingItem" key={id}>
      <img src={image} alt="title" />
      <div className="shoppingItem__info">
        <div className="shoppingItem__title">
          <h2>{title}</h2>
        </div>
        <div className="shoppingItem__price">
          <p>£{price}</p>
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
