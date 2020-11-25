import React from "react";
import "./Shopping.css";
import ImgOne from "../Images/item-1.webp";
import ImgTwo from "../Images/item-2.webp";
import ImgThree from "../Images/item-3.webp";
import ImgFour from "../Images/item-4.webp";
import ImgFive from "../Images/item-5.webp";
import ImgSix from "../Images/item-6.webp";
import ImgSeven from "../Images/item-7.webp";
import ImgEight from "../Images/item-8.webp";
import ShoppingItem from "./ShoppingItem";

function Shopping() {
  return (
    <div className="shopping">
      <div className="shopping__row">
        <ShoppingItem
          image={ImgOne}
          title="Dewalt DCG405N 18v XR Brushless 125mm Angle Grinder Bare Unit Cordless Brushless"
          price={138.0}
          id={1}
        />
        <ShoppingItem
          image={ImgTwo}
          title="BREVILLE Mostra VTT937 4-Slice Toaster - White "
          price={39.99}
          id={2}
        />
        <ShoppingItem
          image={ImgThree}
          title="Shark DuoClean Cordless Vacuum with TruePet and Flexology IF250UKT"
          price={185.0}
          id={3}
        />
        <ShoppingItem
          image={ImgFour}
          title="GRUNDIG Touch Control HD7880 Hair Dryer - White "
          price={34.99}
          id={4}
        />
      </div>
      <div className="shopping__row">
        <ShoppingItem
          image={ImgFive}
          title="Hisense H50U7QFTUK 50 4K Ultra HD HDR Freeview Play Smart ULED TV"
          price={449.0}
          id={5}
        />
        <ShoppingItem
          image={ImgSix}
          title="DJI MAVIC AIR - Onyx Black - 4K 1080p Camera Drone "
          price={399.99}
          id={6}
        />
        <ShoppingItem
          image={ImgSeven}
          title="Nintendo Switch Lite Turquoise & Super Mario All-Stars - Brand New & Sealed"
          price={219.99}
          id={7}
        />
        <ShoppingItem
          image={ImgEight}
          title="New Nokia 5.3 Charcoal 6.55 64GB Dual SIM LTE Android 10 Sim Free Unlocked"
          price={159.99}
          id={8}
        />
      </div>
    </div>
  );
}

export default Shopping;
