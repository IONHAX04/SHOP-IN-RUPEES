import React from "react";
import Grids from "../../pages/Grids/Grids";
import { Divider } from "primereact/divider";
import BannerCards from "../../pages/BannerCards/BannerCards";

import "./Categories.css";

const Categories: React.FC = () => {
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
      route: "fashion",
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      text: "Fashion",
    },
  ];
  return (
    <div>
      <Grids gridData={gridData} />
      <Divider />
      <BannerCards />
    </div>
  );
};

export default Categories;
