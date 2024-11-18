import React from "react";
import Carousels from "../../pages/Carousel/Carousels";
import "./Home.css";
import Grids from "../../pages/Grids/Grids";
import Countdown from "react-countdown";
import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import Products from "../../pages/Products/Products";
import ProdOffers from "../../pages/ProdOffers/ProdOffers";

import { Divider } from "primereact/divider";
import IndivProducts from "../../pages/IndivProducts/IndivProducts";
import SelectionGrids from "../../pages/SelectionGrids/SelectionGrids";

const Home: React.FC = () => {
  const gridData = [
    {
      route: "mobiles",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Mobiles",
    },
    {
      route: "electronics",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Electronics",
    },
    {
      route: "fashion",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Fashion",
    },
    {
      route: "furniture",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Furniture",
    },
    {
      route: "grocery",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Grocery",
    },
    {
      route: "appliances",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Appliances",
    },
    {
      route: "toys",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Toys",
    },
    {
      route: "tab2",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "More",
    },
  ];

  const products = [
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 1",
      discountPrice: "$23.45",
      originalPrice: "$30.15",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 2",
      discountPrice: "$25.00",
      originalPrice: "$35.00",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 3",
      discountPrice: "$20.00",
      originalPrice: "$28.00",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 4",
      discountPrice: "$18.00",
      originalPrice: "$25.00",
    },
  ];

  const offers = [
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Headphones",
      description: "Up to 80% Off",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Speakers",
      description: "Up to 60% Off",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Smartwatches",
      description: "Up to 70% Off",
    },
  ];

  const suggestedProducts = [
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 1",
      specifications: "Specifications of product 1",
      offerPercentage: "50% off",
      strikePrice: "$1500",
      offerPrice: "$999",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 2",
      specifications: "Specifications of product 2",
      offerPercentage: "40% off",
      strikePrice: "$1200",
      offerPrice: "$720",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      name: "Product 3",
      specifications: "Specifications of product 3",
      offerPercentage: "30% off",
      strikePrice: "$1600",
      offerPrice: "$720",
    },
    // ... Other products
  ];

  const selectionGridData = [
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Wired Headphones",
      description: "Up to 50% off",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Bluetooth Speakers",
      description: "Up to 60% off",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Smartwatches",
      description: "Up to 70% off",
    },
    {
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      item: "Laptops",
      description: "Up to 40% off",
    },
  ];

  const renderer = ({
    hours,
    minutes,
    seconds,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <p>
      {hours} hrs {minutes} mins {seconds} secs
    </p>
  );

  return (
    <div>
      <Carousels />
      <Grids gridData={gridData} />
      <div className="bigCelebrationEnds">
        <img
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          alt=""
        />
        <div className="saleEnds">
          <p>Sales end in</p>
          <Countdown
            date={Date.now() + 11 * 60 * 60 * 1000 + 21 * 60 * 1000 + 23 * 1000}
            renderer={renderer}
          />
        </div>
      </div>

      <div className="mostPopoular">
        <div className="header">
          <p>Most Popular</p>
          <p>
            View all <IonIcon icon={chevronForwardOutline}></IonIcon>
          </p>
        </div>

        <Products products={products} />
        <Divider />
      </div>

      <ProdOffers offers={offers} />

      <Divider />
      <div className="mostPopoular">
        <div className="header">
          <p>Suggested For You </p>
          <p>
            View all <IonIcon icon={chevronForwardOutline}></IonIcon>
          </p>
        </div>
        <IndivProducts products={suggestedProducts} />
      </div>
      <Divider />

      <div className="mostPopoular bgPrimary">
        <div className="header">
          <p>Top Selection </p>
          <p>
            View all <IonIcon icon={chevronForwardOutline}></IonIcon>
          </p>
        </div>
        <SelectionGrids grids={selectionGridData} />
      </div>

      <div className="mostPopoular">
        <div className="header">
          <p>Ongoing Offers</p>
          <p>
            View all <IonIcon icon={chevronForwardOutline}></IonIcon>
          </p>
        </div>

        <Products products={products} />
        <Divider />
      </div>

      <div className="sponserAds">
        <p>Sponsored</p>
        <div className="contents">
          <img
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            alt=""
          />
          <div className="adContents">
            <p>Min. 50% Off</p>
            <IonIcon icon={chevronForwardOutline}></IonIcon>
          </div>
        </div>
      </div>

      <Divider />
      <ProdOffers offers={offers} />
      <ProdOffers offers={offers} />

      <div className="mostPopoular bgPrimary">
        <div className="header">
          <p>Top Offers </p>
          <p>
            View all <IonIcon icon={chevronForwardOutline}></IonIcon>
          </p>
        </div>
        <SelectionGrids grids={selectionGridData} />
      </div>
    </div>
  );
};

export default Home;
