import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

function BasketItem({ image, title, price, id }) {
  const [{}, dispatch] = useStateValue();
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="basketItem" key={id}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>£{price}</p>
      <div className="basketItem__icon">
        <IconButton>
          <ClearIcon onClick={remove} fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default BasketItem;
