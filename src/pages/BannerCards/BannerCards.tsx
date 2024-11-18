import React from "react";

import computer from "../../assets/categories/computer.svg";
import desktop from "../../assets/categories/desktop.svg";
import mobile from "../../assets/categories/mobile.svg";
import pant from "../../assets/categories/pant.svg";

const BannerCards: React.FC = () => {
  return (
    <div>
      <div className="banners">
        <div className="bgImg">
          <img src={computer} alt="" />
        </div>
        <div className="texts">
          <p>Laptop</p>
          <p>Collections</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="banners">
        <div className="bgImg">
          <img src={desktop} alt="" />
        </div>
        <div className="texts">
          <p>Desktop</p>
          <p>Collections</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="banners">
        <div className="bgImg">
          <img src={mobile} alt="" />
        </div>
        <div className="texts">
          <p>Smart Phones</p>
          <p>Collections</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="banners">
        <div className="bgImg">
          <img src={pant} alt="" />
        </div>
        <div className="texts">
          <p>Cargo</p>
          <p>Collections</p>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
