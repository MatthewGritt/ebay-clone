import React from "react";
import "./Banner.css";
import CaroPic1 from "../Images/carousel-pic-1.webp";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__menu">
        <ul>
          <li>Home</li>
          <li>Saved</li>
          <li>
            Home<span>&</span>Garden
          </li>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>
            Sports<span>&</span>Leisure
          </li>
          <li>
            Health<span>&</span>Beauty
          </li>
          <li>Toys</li>
          <li>Motors</li>
          <li>Entertainment</li>
          <li className="show">More</li>
          <li className="remove-2">Collectables</li>
          <li className="remove">Deals</li>
          <li className="remove">Local</li>
        </ul>
      </div>
      <div className="bannerImg">
        <div className="bannerImg__info">
          <div className="bannerImg__infoInner">
            <h2>Get 20% off selected small businesses</h2>
            <p className="bannerImg__infoInnerTop">
              Shop small and save with over 7000 selected sellers. Ends 4 Dec
            </p>
            <button>Use code PICKSMALLBIZ</button>
            <p className="bannerImg__infoInnerBottom">
              min spend £10. Max discount £50. <span>T&C apply</span>
            </p>
          </div>
        </div>
        <img src={CaroPic1} alt="" />
      </div>
    </div>
  );
}

export default Banner;
